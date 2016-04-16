/**
 * Created by aungthiha on 4/16/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/:file_name', function(req, res, next) {
  var file = path.resolve(__dirname, '../', req.params.file_name);
  res.send(file);
  //path.exists(file, function(exists) {
  //
  //  if (exists) {
  //    // do something
  //  }
  //});
});

module.exports = router;
