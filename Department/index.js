const express = require('express');
const app = express();
const mongoose = require('mongoose');
var api = require('./router/api.js')
var bodyParser = require('body-parser');
var cors = require('cors');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',api)

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
app.listen(4000, ()=>{
    console.log(' My rest API rtunning on port 4000');
})