var express = require('express');
var router = express.Router();

/* GET home page. */
// route for loading frontend app
router.get('/', function(req, res, next) {
  res.sendFile('index.html',function(err){
    if(err){
      console.log(err);
      //errorStates(err,res,'frontend application files');
    }
  });
}); // route for loading frontend app

module.exports = router;
