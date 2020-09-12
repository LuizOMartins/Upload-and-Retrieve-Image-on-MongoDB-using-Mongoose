var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser'); 
var path = require('path');
var app = express();

app.use(express.static('./public'));
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT");
    next();
});

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);



module.exports = app;