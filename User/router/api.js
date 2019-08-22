var express     = require('express'),
    api         = express.Router(),
    userRouter  = require('./user-router.js');

    api.use('/user',userRouter);

    module.exports = api