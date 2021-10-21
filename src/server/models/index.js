const { esclient, index } = require("../../es");

async function getData(req) {

  const query = {
    query: {
      match: {
        data: {
          // To define   
          query: req.email
          
        }
      }
    }
  }

  const { body: { hits } } = await esclient.search({
    from:  req.page  || 0,
    size:  req.limit || 100,
    index: index,
    body:  query
  });

  const results = hits.total.value;
  const values  = hits.hits.map((hit) => {
    return {
      //
    }
  });

  return {
    results,
    values
  }

}

module.exports = {
  getData
}