var express = require('express');
var router = express.Router();

/* GET static sigma page. */
router.get('/', function(req, res, next) {
  res.render(view='index', options={ title: 'Graph page' });
});

module.exports = router;
