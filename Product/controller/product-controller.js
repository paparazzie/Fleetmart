let productModel = require('../model/product-model.js');

exports.interceptIDs = (req,res,next, id)=>{

    productModel.findById(id).then((data)=> {
        if(!data){return next(new Error("..."));}
        req.product =data;
        next();
    },(err)=>{
        return next(err); 
    })
};

exports.addProduct = (res,req,next) => {
    let product = req.body;
    let products = new productModel(product);

    products.save((err,data)=>{
        if(err){
            return next(new Error("failed to add products"))
        }
        res.status(200).json(data);
    })
}

exports.fetchAllProducts  = (res,req,next) => {
    productModel.find((err,data,next)=>{
        if(err){
            return next(new Error("couldn't fetch products"))
        }
        res.status(200).json(data)
    })
}

exports.fetchOneProduct = (res,req,next) => {
    if(!req.product) return next(new Error("couldn't fetch one product"))

    res.status(200).json(req.product)
}

exports.removeProduct = (res,req,next) => {
    productModel.remove({_id: req.product._id},(req,res)=>{
        if(err){
            return next(new Error("couldn't delete product"))
        }
        res.json(200).json(req.student)
    })
}