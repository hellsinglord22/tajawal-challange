const _ = require('lodash'),
  assert = require('assert'),
  MATCHING_PLUGIN_MUST_BE_FUNCTION = 'matchingPlugin must be of type function',
  MATCHING_PLUGIN_REQUIRED = 'matchingPlugin is required';

const Matcher = function(registeredFunctions = []) {

  this.registeredFunctions = _.isArray(registeredFunctions) ? registeredFunctions : [registeredFunctions];

};


Matcher.prototype = {

  add: function(matchingPlugin) {

    assert(matchingPlugin, MATCHING_PLUGIN_REQUIRED);
    assert(_.isFunction(matchingPlugin), MATCHING_PLUGIN_MUST_BE_FUNCTION);
    this.registeredFunctions.push(matchingPlugin);
    return this;

  },

  match: function (object) {

    const self = this;
    for (let index = 0; index < self.registeredFunctions.length; index++) {

      if (!self.registeredFunctions[index](object)) {

        return false;

      }

    }
    return true;

  }
};


module.exports = Matcher;