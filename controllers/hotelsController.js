const hotelsApi = require('../api').hotels,
  Joi = require('joi'),
  BAD_REQUEST = 400,
  _ = require('lodash'),
  { getHotelsSchema } = require('../schema'),
  sort = require('../algorithms/sort'),
  matchFactory = require('../algorithms/matchFactory');


const fetch = async function (req, res) {

  const hotels = await hotelsApi.fetch(),
    { error, value } = Joi.validate(req.query, getHotelsSchema);

  if (error) {

    res.status(BAD_REQUEST);
    res.send(error.details);

  } else {

    const matchCriteria = _.pick(value, ['name', 'price', 'date', 'city']),
      sortCriteria = _.get(value, 'sort_by'),
      hotelsMatcher = matchFactory(matchCriteria),
      matchedHotels = sort(_.filter(hotels, hotelsMatcher), sortCriteria);

    res.send(matchedHotels);

  }


};


module.exports = { fetch };