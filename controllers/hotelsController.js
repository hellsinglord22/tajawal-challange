const hotelsApi = require('../modules/api').hotels;

const fetch = async function (req, res) {

  const hotels = await hotelsApi.fetch();
  res.send(hotels);

};


module.exports = { fetch };