const nock = require('nock'),
  config = require('config'),
  HOTEL_API = config.get('API.HOTEL'),
  HotelsApi = require('./hotels'),
  { expect } = require('chai');

const SERVER_RESPONSE = { OK: 200 };

describe('# HotelsApi.fetch()', function() {

  it('Happy path - fetch all hotels', async function() {

    const self = this,
      FAKE_API_RESPONSE = { hotels: self.loadFakeHotels() },
      FAIL_TO_LOAD_TEST_DATA = 'Fail to load test data';

    nock(HOTEL_API)
      .get(() => true)
      .reply(SERVER_RESPONSE.OK, FAKE_API_RESPONSE)

    const hotels = await HotelsApi.fetch();

    expect(FAKE_API_RESPONSE, FAIL_TO_LOAD_TEST_DATA).to.not.be.undefined;
    expect(hotels).to.deep.have.members(FAKE_API_RESPONSE.hotels);

  });

});