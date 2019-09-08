var express     = require('express'),
    api         = express.Router(),
    departmentRouter  = require('./department-router.js');

    api.use('/department',departmentRouter);

    module.exports = api