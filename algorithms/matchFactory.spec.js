const matchFactory = require('./matchFactory'),
  _ = require('lodash'),
  { expect } = require('chai');


const runMatchingTest = function (matchCriteria, expectedOutput) {

  const fakeHotels = this.loadFakeHotels(),
    priceLessThan100 = matchFactory(matchCriteria);

  const matchedHotels = _.filter(fakeHotels, priceLessThan100);

  expect(fakeHotels).to.not.be.undefined;
  expect(matchedHotels).to.deep.have.members(expectedOutput);


};

describe('# algorithms matchFactory(matchCriteria)', function () {

  it('price less than 100', function() {

    const EXPECTED_OUTPUT = [
      {
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
      },
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

    runMatchingTest.call(this, { price: '0:100' }, EXPECTED_OUTPUT);

  });

  it('price less than 100 and date range 06-12-2020:28-12-2020',
    function() {

      const EXPECTED_OUTPUT = [
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

      runMatchingTest.call(this, { price: '0:100', date: '06-12-2020:28-12-2020' }, EXPECTED_OUTPUT);

    });
  it('price less than 100 and city cairo', function(){

    const EXPECTED_OUTPUT = [{
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
    }];
    runMatchingTest.call(this, { price: '0:100', city: 'cairo' }, EXPECTED_OUTPUT);

  });

});