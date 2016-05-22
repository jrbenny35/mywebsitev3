/**
 * Created by root on 10/1/15.
 */
'use strict';

var express = require('express');
var router = express.Router();


    router.use('/', require('./routes/index'));
    router.use('/', require('./routes/partials'));
    router.use('/api', require('./routes/api/api'));
    router.use('/api', require('./routes/api/blogApi'));
    router.use('*', require('./routes/index'));

module.exports = router;
