var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('stream', { title: 'The magnificant Commentators palace' });
});

module.exports = router;
