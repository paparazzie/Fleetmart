let express = require('express'),
    router = express.Router();
    controller = require('../controller/product-controller.js');
   upload = require("../middleware/upload.js")
    
    router.route('/')
    .post(upload.single('avatar'),controller.addProduct)
    .get(controller.fetchAllProducts);


    
  
    module.exports = router;