import express from express;
const router = express.Router();

/* GET static sigma page. */
router.get('/', function(req, res, next) {
  res.render(view='index', options={ title: 'Graph page' });
});

module.exports = router;
