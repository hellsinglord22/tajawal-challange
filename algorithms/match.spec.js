const Match = require('./match'),
  matchPrice = require('./matchPrice'),
  matchAvailability = require('./matchAvailability'),
  _ = require('lodash'),
  { expect } = require('chai'),
  hotel ={
    name: 'Rotana Hotel',
    price: 80.6,
    city: 'cairo',
    availability: [
      {
        from: '10-10-2020',
        to: '12-10-2020'
      },
      {
        from: '25-10-2020',
        to: '10-11-2020'
      },
      {
        from: '05-12-2020',
        to: '18-12-2020'
      }
    ]
  };


describe('# algorithm.match(matchingCriteria, hotelObject)', function() {

  it('match hotel price smaller than 100', function() {

    const matchingCriteria = '0:100',
      matchPriceLessThan100 = Match([_.bind(matchPrice, null, matchingCriteria)]);

    expect(matchPriceLessThan100.match(hotel)).to.be.true;

  });


  it('match hotel price smaller than 100 and avaliability 05-12-2020:18-12-2020', function() {

    const pricePlugin = _.bind(matchPrice, null, '0:100'),
      availabilityPlugin = _.bind(matchAvailability, null, '05-12-2020:18-12-2020'),
      matchPriceAndAvailability = Match()
        .add(pricePlugin)
        .add(availabilityPlugin);

    expect(matchPriceAndAvailability.match(hotel)).to.be.true;

  });

  it('match hotel name Le Meridien', function() {

    const matchName = function (criteria) {

        return function(hotel) {

          return _.isMatch(hotel, criteria);

        }

      },
      matchNamePlugin = matchName({ name: 'Le Meridien' }),
      matchNameToLeMeridien = Match([matchNamePlugin]);

    expect(matchNameToLeMeridien.match(hotel)).to.be.false;


  });

  it('do not match', function() {

    const noMatch = Match();

    expect(noMatch.match(hotel)).to.be.true;

  });

});


