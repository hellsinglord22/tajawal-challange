const assert = require('assert'),
  { NODE_ENV } = process.env;


describe('PRE-TEST Checklist', function() {

  it('NODE_ENV="TEST"', function() {

    const ERROR_MESSAGE = 'NODE_ENV must be set to test';
    assert(NODE_ENV && NODE_ENV === 'test', ERROR_MESSAGE);

  });

});
