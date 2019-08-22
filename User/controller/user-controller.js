var userModel = require("../model/User.js");

exports.addUsers =  (req,res,next) => {
    var user = req.body;
    console.log(user)

    var users = new userModel(user);

   users.save((err,data)=>{
        if(err){
            return next (new Error("failed to add new students"));
            console.log(err)
        }
        res.status(200).json(data);
    });
    
}