const _ = require('lodash'),
  assert = require('assert'),
  split = _.split,
  trim = _.trim,
  isString = _.isString,
  isNaN = _.isNaN,
  RANGES_EXPECTED_COUNT = 2,
  MIN_PRICE_RANGE_INDEX = 0,
  MAX_PRICE_RANGE_INDEX = 1,
  PRICE_RANGE_IS_REQUIRED_ERROR = 'priceRangeString is required',
  PRICE_RANGE_MUST_BE_STRING_ERROR = 'priceRangeString must be of type string',
  PRICE_RANGE_FORMAT_ERROR = 'priceRangeString should be two numbers seprated by :',
  HOTEL_OBJECT_REQUIRED_ERROR = 'hotelObject is required',
  HOTEL_OBJECT_WRONG_FORMAT_ERROR = 'hotelObject have a wrong format',
  parseFloat = Number.parseFloat;


const getPriceMatchingFunction = function(priceRangeStringString) {

  const { minRange, maxRange } = getMinMaxRange(priceRangeStringString);

  return function(hotelObject){

    assert(hotelObject, HOTEL_OBJECT_REQUIRED_ERROR);
    assert(hotelObject.price, HOTEL_OBJECT_WRONG_FORMAT_ERROR);

    return hotelObject.price >= minRange && hotelObject.price <= maxRange;

  }

};

const getMinMaxRange = function (priceRangeString) {

  const PRICE_RANGE_SEPERATOR = ':',
    ranges = split(trim(priceRangeString), PRICE_RANGE_SEPERATOR);

  assert(priceRangeString, PRICE_RANGE_IS_REQUIRED_ERROR);
  assert(isString(priceRangeString), PRICE_RANGE_MUST_BE_STRING_ERROR);
  assert(ranges.length == RANGES_EXPECTED_COUNT, PRICE_RANGE_FORMAT_ERROR);

  const minRange = parseFloat(ranges[MIN_PRICE_RANGE_INDEX]),
    maxRange = parseFloat(ranges[MAX_PRICE_RANGE_INDEX]);

  assert(!isNaN(minRange) && !isNaN(maxRange), PRICE_RANGE_FORMAT_ERROR);

  return { minRange, maxRange };

};

module.exports = getPriceMatchingFunction;