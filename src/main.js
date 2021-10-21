const elastic = require("./es");
const server = require("./server");

require("dotenv").config();


(async function main() {

    const isElasticReady = await elastic.checkConnection();

    if (isElasticReady) {

        const elasticIndex = await elastic.esclient.indices.exists({ index: elastic.index });

        if (!elasticIndex.body) {
            console.error('Index not found')
        } else {
            console.log('Index found')
            server.start();
        }

    }

})();