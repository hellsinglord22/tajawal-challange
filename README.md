# TAJAWAL CHALLANGE

[![Build Status](https://travis-ci.org/hellsinglord22/tajawal-challange.svg?branch=dev)](https://travis-ci.org/hellsinglord22/tajawal-challange)

## Content

1.  [Node version](https://github.com/hellsinglord22/tajawal-challange#node-version)
2.  [Installing dependencies](https://github.com/hellsinglord22/tajawal-challange#installing-dependencies)
3.  [Using api](https://github.com/hellsinglord22/tajawal-challange#using-api)
4.  [Assumptions](https://github.com/hellsinglord22/tajawal-challange#assumptions)

---

## Node version

* Node > 9.x is requierd .

## Installing dependencies

* `npm install && npm start` to run server

## Using api

* The `/hotels` end point will fetch all hotels .
* Using query param we can `filter` and `sort` hotels .
* `sort_by` is a query param that can be passed `price` and `name` but not both.
* The `name` and `city` query strings accept string value which is used later for filtering .
* The `date` and `price` query string accept a string value range format, (e.g **100:200** or **10-10-2010:20-10-2010** ).

## Assumptions

* First assumption: in case of sorting the following string array `['b', 'c', 'a', 'A']` the result will be `['a', 'b', 'c', 'A']` like in the `ASCII` table .
* Second assumption: When filtiring by `availability` the date `minRange` should be greater than or equal the `from` property and `maxRange` should be smaller than or equal `to` property .
