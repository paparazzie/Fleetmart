let multer = require('multer');

const upload = multer({
    dest :'images',
    limit:{
        filesize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error("please upload a picture"))
        }
        cb(undefined,true)
    }
})

module.exports = upload
