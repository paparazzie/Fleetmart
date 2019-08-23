 var mongoose  = require('mongoose'),
    adminSchema;

 mongoose.connect('mongodb+srv://babatunde:Egbinola3@cluster0-ipopc.mongodb.net/Fleetmart?retryWrites=true');

 adminSchema = new mongoose.Schema({
     username:{type:String, require:true},
     email:{type:String, require:true}
 })

 module.exports = mongoose.model('admin',adminSchema);
