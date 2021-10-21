const express      = require("express");
const cors         = require("cors");

const routes       = require("./routes");
                     require("dotenv").config();

const app  = express();
const port = process.env.NODE_PORT || 3000;

/**
 * @function start
 * @returns {void}
 * @description Starts the HTTP Express server.
 */


function start() {

  return  app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors())
  .use("/api",routes)
  .use((_req, res) => res.status(404).json({ success: false,error: "Route not found" }))
  .listen(port, () => console.log(`Server ready on port ${port}`));

}

module.exports = {
  start
};