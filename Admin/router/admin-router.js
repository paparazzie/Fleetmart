let express = require('express'),
    router = express.Router();

    controller = require('../controller/admin-controller.js');

    router.route('/')
    .post(controller.addAdmins)

    module.exports = router;