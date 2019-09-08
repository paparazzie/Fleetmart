let express = require('express'),
    router = express.Router();
    controller = require('../controller/product-controller.js') 
    
    router.param("id",controller.interceptIDs);

    router.route('/')
    .post(controller.addProduct)
    .get(controller.fetchAllProducts);

    router.route("/:id")
    .get(controller.fetchOneProduct)
    .delete(controller.removeProduct);
    


    module.exports = router;