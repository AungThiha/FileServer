var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var items = [
    {
      _id: 1,
      name: "Apple corer",
      price: 5
    },
    {
      _id: 2,
      name: "Baster",
      price: 3
    },
    {
      _id: 3,
      name: "Biscuit cutter",
      price: 7
    },
    {
      _id: 4,
      name: "Biscuit press",
      price: 9
    },
    {
      _id: 5,
      name: "Blow torch",
      price: 32
    },
    {
      _id: 6,
      name: "Boil over preventer",
      price: 30
    },
    {
      _id: 7,
      name: "Bottle opener",
      price: 3
    },
    {
      _id: 8,
      name: "Bowl",
      price: 10
    },
    {
      _id: 9,
      name: "Bread knife",
      price: 10
    },
    {
      _id: 10,
      name: "Browning tray",
      price: 30
    },
    {
      _id: 11,
      name: "Butter curler",
      price: 5
    },
    {
      _id: 12,
      name: "Colander",
      price: 30
    }
  ];
  res.json(items);
});

module.exports = router;
