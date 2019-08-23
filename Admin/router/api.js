var express     = require('express'),
    api         = express.Router(),
    userRouter  = require('./admin-router.js');

    api.use('/admin',userRouter);

    module.exports = api