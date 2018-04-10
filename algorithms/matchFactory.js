const Match = require('./match'),
  matchPrice = require('./matchPrice'),
  _ = require('lodash'),
  matchAvailability = require('./matchAvailability');

const matchFactory = function (matchingCriteria) {

  const { price, city, name, date } = matchingCriteria,
    matcher = Match();


  if (price)
    matcher.add(_.bind(matchPrice, null, price));
  if (date)
    matcher.add(_.bind(matchAvailability, null, date))
  if (name)
    matcher.add(_.matches({ name }))
  if (city)
    matcher.add(_.matches({ city }))

  return matcher.match.bind(matcher);

};


module.exports = matchFactory;