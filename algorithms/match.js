const _ = require('lodash'),
  assert = require('assert'),
  MATCHING_PLUGIN_MUST_BE_FUNCTION = 'matchingPlugin must be of type function',
  MATCHING_PLUGIN_REQUIRED = 'matchingPlugin is required';

const Matcher = function(functions = []) {

  return new Init(functions);

};


const Init = function(functions) {

  this.functions = _.isArray(functions) ? functions : [functions];
  return this;

};


Init.prototype.add = function(matchingPlugin) {

  assert(matchingPlugin, MATCHING_PLUGIN_REQUIRED);
  assert(_.isFunction(matchingPlugin), MATCHING_PLUGIN_MUST_BE_FUNCTION);
  this.functions.push(matchingPlugin);
  return this;

};


Init.prototype.match = function (object) {

  const self = this;
  for (let index = 0; index < self.functions.length; index++) {

    if (!self.functions[index](object)) {

      return false;

    }

  }
  return true;

};


module.exports = Matcher;