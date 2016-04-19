var express = require('express');
var fs = require('fs');
var router = express.Router();
var config = require('../config/downloads');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(config.download_dir, function(err, files){
    if(err){
      return res.send("Error ls");
    }
    res.render('index', { title: 'Torrent Leeched', files: files });
  });

});

module.exports = router;
