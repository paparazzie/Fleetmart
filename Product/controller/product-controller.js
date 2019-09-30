let productModel = require('../model/product-model.js');
let config       = require('../config/config.js')      

var cloudinary = require('cloudinary').v2;
//abstracting the config details into a config file
cloudinary.config({ 
    cloud_name: config.cloudinary.CLOUD_NAME,
    api_key: config.cloudinary.API_KEY,
    api_secret: config.cloudinary.API_SECRET
  });

exports.addProduct =  (req,res,next) => {
    
    var product = req.body;
    //check if file was uploaded to cloudinary
    //console.log()
    if(req.file){
        //upload file to cloudinary
        cloudinary.uploader.upload(req.file.path, function(error,result){
            if(result){
                //add image link to request body
                product.avatar = result.secure_url;
                //create a new product 
                var products = new productModel(product);
                  console.log(products)
                products.save().then((data)=>{
                res.send(data)
                }).catch((error)=>{
                  res.status(500).send()
                })
  
            } 
        })
    }else{
        console.log("error uploading image")
    }
 
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

