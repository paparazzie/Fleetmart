let express = require('express'),
    router = express.Router();

    controller = require('../controller/department-controller.js');

    router.route('/')
    .post(controller.addDepartments)

    module.exports = router;