const _ = require('lodash'),
  assert = require('assert'),
  split = _.split,
  trim = _.trim,
  isString = _.isString,
  DATE_FORMAT = 'DD-MM-YYYY',
  RANGES_EXPECTED_COUNT = 2,
  MIN_PRICE_RANGE_INDEX = 0,
  MAX_PRICE_RANGE_INDEX = 1,
  PRICE_RANGE_IS_REQUIRED_ERROR = 'dateRangeString is required',
  PRICE_RANGE_MUST_BE_STRING_ERROR = 'dateRangeString must be of type string',
  PRICE_RANGE_FORMAT_ERROR = 'dateRangeString should be two numbers seprated by :',
  HOTEL_OBJECT_REQUIRED_ERROR = 'hotelObject is required',
  HOTEL_OBJECT_WRONG_FORMAT_ERROR = 'hotelObject have a wrong format',
  moment = require('moment');


const matchAvailability = function(dateRangeString, hotelObject) {

  const { minRange, maxRange } = getMinMaxRange(dateRangeString);


  assert(hotelObject, HOTEL_OBJECT_REQUIRED_ERROR);
  assert(hotelObject.availability, HOTEL_OBJECT_WRONG_FORMAT_ERROR);

  const hotelsAvailability = hotelObject.availability;

  for (let index = 0; index < hotelsAvailability.length; index++) {

    const from = moment(hotelsAvailability[index].from, DATE_FORMAT),
      to = moment(hotelsAvailability[index].to, DATE_FORMAT);

    assert(from && to, HOTEL_OBJECT_WRONG_FORMAT_ERROR);

    if (minRange.isSameOrAfter(from) && maxRange.isSameOrBefore(to)) {

      return true

    }

  }

  return false;


};

const getMinMaxRange = function (dateRangeString) {

  const PRICE_RANGE_SEPERATOR = ':',
    ranges = split(trim(dateRangeString), PRICE_RANGE_SEPERATOR);

  assert(dateRangeString, PRICE_RANGE_IS_REQUIRED_ERROR);
  assert(isString(dateRangeString), PRICE_RANGE_MUST_BE_STRING_ERROR);
  assert(ranges.length == RANGES_EXPECTED_COUNT, PRICE_RANGE_FORMAT_ERROR);

  const minRange = moment(ranges[MIN_PRICE_RANGE_INDEX], DATE_FORMAT),
    maxRange = moment(ranges[MAX_PRICE_RANGE_INDEX], DATE_FORMAT);

  return { minRange, maxRange };

};


module.exports = matchAvailability;