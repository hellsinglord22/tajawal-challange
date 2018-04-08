const express = require('express'),
  config = require('config'),
  PORT = config.get('PORT'),
  hotelsRoutes = require('./routes/hotels'),
  app = express();


app.use(hotelsRoutes)
  .listen(PORT);