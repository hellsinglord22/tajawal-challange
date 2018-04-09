const isBetween = function ({ left, right, value }) {

  return left <= value && right >= value;

};


module.exports = isBetween;