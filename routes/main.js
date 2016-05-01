/**
 * Created by root on 9/30/15.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('partials/main');
});

module.exports = router;
