var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "todos1"
  }, {
    id: 2,
    name: "todos2"
  }]);
});

module.exports = router;
