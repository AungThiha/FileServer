/**
 * Created by aungthiha on 4/16/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config/downloads');

/* GET home page. */
router.get('/:file_name', function (req, res, next) {
  var file = path.resolve(config.download_dir, req.params.file_name);
  path.exists(file, function (exists) {
    if (exists) {
      res.sendFile(file);
    }else{
      res.send("File not exist");
    }
  });
});

module.exports = router;
