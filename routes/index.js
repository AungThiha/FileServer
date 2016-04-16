var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('/home/ubuntu/movies/terminatorTvSeries', function(err, files){
    if(err){
      return res.send("Error ls");
    }
    res.render('index', { title: 'Terminator TV series', files: files });
  });

});

module.exports = router;
