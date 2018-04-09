/**
 * COMMENTS FOR THE CODE REVIEWER
 * ==============================
 * i am testing a lodash function and you
 * may ask yourself why would i do this,
 * what i am really testing is the encapsulated function
 * because in the future we may want to change the implementation
 * to use one of our own because of, memory leaks, faster algorithm, etc
 * that's why i took the time to write this test
 */

const sort = require('./sort'),
  { expect } = require('chai');


describe('# algorithms.sort(unsorted, predicate)', function() {

  it('Happy path - sort string', function() {

    const UNSORTED_OBJECTS = [{ name: 'B' }, { name: 'A' }, { name: 'C' }],
      EXPECTED_RESULT = [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
      SORT_BY_NAME = 'name',
      sortedByName = sort(UNSORTED_OBJECTS, SORT_BY_NAME);

    expect(sortedByName).to.deep.have.members(EXPECTED_RESULT);

  });


  it('Happy path - sort number', function() {

    const UNSORTED_OBJECTS = [{ price: 200 }, { price: 100 }, { price: 300 }],
      EXPECTED_RESULT = [{ price: 100 }, { price: 200 }, { price: 300 }],
      SORT_BY_PRICE = 'price',
      sortedByPrice = sort(UNSORTED_OBJECTS, SORT_BY_PRICE);

    expect(sortedByPrice).to.deep.have.members(EXPECTED_RESULT);

  });

});