let mongoose = require('mongoose'),
    userSchema;
mongoose.connect('mongodb+srv://babatunde:Egbinola3@cluster0-ipopc.mongodb.net/Fleetmart?retryWrites=true');

userSchema = new mongoose.Schema({
    firstname: {type:String, require:true},
    lastname:  {type:String,require:true},
    username: {type:String,require:true},
    email:{type:String,unique:true,require:true}
});

module.exports = mongoose.model('user',userSchema);
