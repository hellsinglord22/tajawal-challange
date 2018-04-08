'use strict';

const sinon = require('sinon'),
  chai = require('chai'),
  sinonChai = require('sinon-chai'),
  config = require('config'),
  winston = require('winston'),
  nock = require('nock'),
  chaiMatch = require('chai-match'),
  chaiAsPromised = require('chai-as-promised');


const loadFakeHotels = function () {

  const fakeData = require('./hotels.data');

  return fakeData;

};


before(function() {

  this.loadFakeHotels = loadFakeHotels;
  chai.use(sinonChai);
  chai.use(chaiMatch);
  chai.use(chaiAsPromised);

  // remove on it's own file
  winston.setLevels({
    debug: 5,
    info: 4,
    warning: 3,
    error: 2,
    critical: 1,
    test: 0
  });
  winston.addColors({
    debug: 'green',
    info: 'cyan',
    warn: 'yellow',
    error: 'red',
    critical: 'red',
    test: 'blue'
  });
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {
    level: config.get('LOGGER_LEVEL'),
    colorize: true
  });

});

beforeEach(function beforeEach() {

  this.sandbox = sinon.sandbox.create();

});

afterEach(function afterEach() {

  this.sandbox.restore();
  nock.cleanAll();
  nock.enableNetConnect();

});

