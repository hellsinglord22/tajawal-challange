const getDateMatchingFunction = require('./getDateMatchingFunction'),
  { expect } = require('chai'),
  _ = require('lodash');

describe('# algorithms.getDateMatchingFunction(dateRange)', function() {

  it('Happy path - match by date range 01-10-2020:02-10-2020', function() {

    const DATE_RANGE = '06-12-2020:28-12-2020',
      matchHotelByAvailability = getDateMatchingFunction(DATE_RANGE),
      fakeHotels = this.loadFakeHotels(),
      EXPECTED_RESULT = [
        {
          name: 'Le Meridien',
          price: 89.6,
          city: 'london',
          availability: [
            {
              from: '01-10-2020',
              to: '12-10-2020'
            },
            {
              from: '05-10-2020',
              to: '10-11-2020'
            },
            {
              from: '05-12-2020',
              to: '28-12-2020'
            }
          ]
        }
      ];

    const matchedHotels = _.filter(fakeHotels, matchHotelByAvailability);

    expect(fakeHotels).to.not.be.undefined;
    expect(matchedHotels).to.deep.have.members(EXPECTED_RESULT);

  });

});
