const express = require('express');
const app = express();
const mongoose = require('mongoose');
var api = require('./router/api.js')
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',api)

mongoose.connect(
    'mongodb+srv://babatunde:Egbinola3@cluster0-ipopc.mongodb.net/Fleetmart?retryWrites=true',
    {useNewUrlParser:true},
    (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Successful')
        }
    }
)
app.listen(3000, ()=>{
    console.log(' My rest API running on port 3000');
})