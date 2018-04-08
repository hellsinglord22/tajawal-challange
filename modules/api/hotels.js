const axios = require('axios'),
  config = require('config'),
  _ = require('lodash'),
  assert = require('assert'),
  HOTELS_API = config.get('API.HOTEL');

const fetch = async function () {

  const hotelsApiResponse = await axios.get(HOTELS_API),
    hotels = _.get(hotelsApiResponse, 'data.hotels'),
    INVALID_API_RESPONSE = `Invalid api response from ${HOTELS_API}`;

  assert(hotels, INVALID_API_RESPONSE);

  return hotels;

};

module.exports = { fetch };