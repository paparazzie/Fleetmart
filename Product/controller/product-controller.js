let productModel = require('../model/product-model.js');

exports.addProduct =  (req,res,next) => {
    var product = req.body;
    console.log(product)
    product.avatar = req.file.path
    var products = new productModel(product);

    products.save().then((data)=>{
       res.send(data)
    }).catch((error)=>{
        res.status(500).send()
    })

}

exports.fetchAllProducts  = (req,res,next) => {
    productModel.find({}).then((data)=>{
        if(!data){
            res.status(400).send()
        }
        res.send(data)
    }).catch((error)=>{
        res.status(500).send()
    })
}

exports.fetchOneProduct = (res,req,next) => {
    if(!req.product) return res.status(404).send()

    res.send()
}

