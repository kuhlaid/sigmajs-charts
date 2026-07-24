import express from express;
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(view='index', options={ title: 'Static main page' });
});

module.exports = router;
