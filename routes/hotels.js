const express = require('express'),
  router = express.Router(),
  hotelsController = require('../controllers/hotelsController');

router.get('/hotels', hotelsController.fetch);


module.exports = router;