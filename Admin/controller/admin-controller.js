var adminModel = require("../model/admin-model.js");

exports.addAdmins =  (req,res,next) => {
    var admin = req.body;
    console.log(admin)

    var admins = new adminModel(admins);

   admins.save((err,data)=>{
        if(err){
            return next (new Error("failed to add new admins"));
            console.log(err)
        }
        res.status(200).json(data);
    });
    
}