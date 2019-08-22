let express = require('express'),
    router = express.Router();

    controller = require('../controller/user-controller.js');

    router.route('/')
    .post(controller.addUsers)

    module.exports = router;