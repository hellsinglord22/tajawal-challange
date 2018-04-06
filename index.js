const express = require('express'),
  config = require('config'),
  PORT = config.get('PORT'),
  app = express();


app
  .get('/', function(req, res) {

    res.send('Hello');

  })
  .listen(PORT);

