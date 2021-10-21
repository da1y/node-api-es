const express    = require("express");
const controller = require("../controllers");
const routes     = express.Router();

routes.route("/data").post(controller.getData);


module.exports = routes;