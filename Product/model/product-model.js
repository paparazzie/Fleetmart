var mongoose = require('mongoose'),
    productSchema;

    productSchema = new mongoose.Schema({
        product_name: {type:String, required:true}, 
        product_price: {type:String, required:true},
        product_department: {type:String, required:true},
        avatar: {type:String}    
    })

    module.exports = mongoose.model('product',productSchema);

    