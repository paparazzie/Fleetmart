let express = require('express'),
    router = express.Router();

    controller = require('../controller/department-controller.js');

    router.route('/')
    .post(controller.addDepartments)
    .get(controller.viewDepartments)

    module.exports = router;