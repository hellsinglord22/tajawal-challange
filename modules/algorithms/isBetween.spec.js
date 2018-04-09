const isBetween = require('./isBetween'),
  { expect } = require('chai');


describe('# algorithms.isBetween({ left, right, value})', function() {

  it('Happy path', function() {

    const LEFT = 100,
      RIGHT = 300,
      VALUE = 200,
      EXPECTED_OUTPUT = true;

    expect(isBetween({ left: LEFT, right: RIGHT, value: VALUE })).to.equal(EXPECTED_OUTPUT);

  });


  it('Happy path - value equal to right', function() {

    const LEFT = 100,
      RIGHT = 300,
      VALUE = 300,
      EXPECTED_OUTPUT = true;

    expect(isBetween({ left: LEFT, right: RIGHT, value: VALUE })).to.equal(EXPECTED_OUTPUT);

  });


  it('Happy path - value equal to left', function() {

    const LEFT = 100,
      RIGHT = 300,
      VALUE = 100,
      EXPECTED_OUTPUT = true;

    expect(isBetween({ left: LEFT, right: RIGHT, value: VALUE })).to.equal(EXPECTED_OUTPUT);

  });

});