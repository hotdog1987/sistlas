(function() {
  'use strict';
  var express = require('express');
  var router = express.Router();

  var apiCtrl = require('../controllers/apiCtrl');

  // api to get history information
  router.get('/:section', apiCtrl);

  module.exports = router;

})();