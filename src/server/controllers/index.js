const model = require("../models");

/**
 * @function getData
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @returns {void}
 */

async function getData(req, res) {

  const email  = req.body.email;

  console.log("salut",email)

 
}



module.exports = {
  getData
};