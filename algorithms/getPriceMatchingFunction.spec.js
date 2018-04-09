const getPriceMatchingFunction = require('./getPriceMatchingFunction'),
  { expect } = require('chai'),
  _ = require('lodash');

describe('# algorithms.getPriceMatchingFunction(priceRange)', function() {

  it('Happy path - match by price range 100-200', function() {


    const PRICE_RANGE = '100:200',
      matchHotelByPrice = getPriceMatchingFunction(PRICE_RANGE),
      fakeHotels = this.loadFakeHotels(),
      EXPECTED_RESULT = [
        {
          name: 'Media One Hotel',
          price: 102.2,
          city: 'dubai',
          availability: [
            {
              from: '10-10-2020',
              to: '15-10-2020'
            },
            {
              from: '25-10-2020',
              to: '15-11-2020'
            },
            {
              from: '10-12-2020',
              to: '15-12-2020'
            }
          ]
        }
      ];

    const matchedHotels = _.filter(fakeHotels, matchHotelByPrice);

    expect(fakeHotels).to.not.be.undefined;
    expect(matchedHotels).to.deep.have.members(EXPECTED_RESULT);

  });

});
// describe('# algorithms.getDateMatchingFunction(dateRange)');
