var mongoose = require('mongoose'),
    productSchema;

    productSchema = new mongoose.Schema({
        product_name: {type:String, required:true}, 
        product_price: {type:String, required:true},
        product_department: {type:String, required:true},
        product_photo: {type:String, requires:true}   
    })

    module.exports = mongoose.model('product',productSchema);

    