var departmentModel = require('../model/department-model.js');

exports.addDepartments = (req,res,next) =>{
  var  department = req.body;
  var departments = new departmentModel(department)

  departments.save(err,data=>{
      if(err){
          return next(new Error("couldn't add department"))
      }
  })

  res.status(200).json(data)

}