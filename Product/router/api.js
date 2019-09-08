var express     = require('express'),
    api         = express.Router(),
    productRouter  = require('./product-router.js');

    api.use('/product',productRouter);

    module.exports = api