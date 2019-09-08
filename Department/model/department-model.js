var mongoose = require('mongoose'),
    departmentSchema;

    departmentSchema = new mongoose.Schema({
        department_name: {type:String, required:true}    
    })

    module.exports = mongoose.model('department',departmentSchema);

    