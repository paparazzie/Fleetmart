var departmentModel = require('../model/department-model.js');

exports.addDepartments = (req,res,next) =>{
  var  department = req.body;
  console.log(department)
  var departments = new departmentModel(department)

  departments.save().then((data)=>{
    res.send(data)
  }).catch((error)=>{
    res.status(500).send()
  })
};

exports.viewDepartments = (req,res) =>{
   departmentModel.find({}).then((data)=>{
    res.send(data)
   }).catch(error=>{
    res.status(500).send()
   })
};