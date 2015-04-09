var express = require('express');
var router = express.Router();
var pageAsk = require('./pageAsk');

/* GET home page. */
router.get('/', pageAsk.index);
router.post('/sumbit', pageAsk.sumbit);
router.get('/getAll', pageAsk.getAll);

module.exports = router;
