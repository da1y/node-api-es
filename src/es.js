require("dotenv").config();

const { Client } = require("@elastic/elasticsearch");
const elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
const esclient   = new Client({ node: elasticUrl });
const index      = process.env.ELASTIC_INDEX

function checkConnection() {
    return new Promise(async (resolve) => {
  
      console.log("Checking connection to ElasticSearch...");
      let isConnected = false;
  
      while (!isConnected) {
        try {
  
          await esclient.cluster.health({});
          console.log("Successfully connected to ElasticSearch");
          isConnected = true;          
        } catch (_) {}
      }
  
      resolve(true);
  
    });
  }

  module.exports = {checkConnection,index,esclient}
