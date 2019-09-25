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

    products.save().then((data)=>{
        if(!data){
            res.status(404).send()
        }
       res.send(data)
    }).catch((error)=>{
        res.status(500).send()
    })

}

exports.fetchAllProducts  = (res,req,next) => {
    productModel.find({}).then((data)=>{
        if(!data){
            res.ststus(400).send()
        }
        res.send()
    }).catch((error)=>{
        res.status(500).send()
    })
}

exports.fetchOneProduct = (res,req,next) => {
    if(!req.product) return res.status(404).send()

    res.send()
}

exports.removeProduct = (res,req,next) => {
    productModel.remove({_id: req.product._id},(req,res)=>{
        if(err){
            return next(new Error("couldn't delete product"))
        }
        res.json(200).json(req.student)
    })
}