var express = require('express');
var router = express.Router();
var pageAsk = require('./pageAsk');

/* GET home page. */
router.get('/', pageAsk.index);
router.post('/sumbit', pageAsk.sumbit);

module.exports = router;
