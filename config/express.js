var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser'); 
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs'); 

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


var multer = require('multer');
var  upload = multer({
    dest:'uploads/',
    limits: {
        fileSize: 2*1024 * 1024,
    },
    fileFilter: (req,file,cb) =>{
        const allowedMimes = [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/jpg',
                'image/gif'
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error('Invalido file Type.'));
        }
    }

});

// var imgModel = require('../app/models/image'); 
var modelImg = mongoose.model('imagens');
// Retriving the image 
app.get('/image', (req, res) => { 
    modelImg.find({}, (err, items) => { 
        console.log('BUSCANDO...');
        if (err) { 
            res.sendStatus(500);
            console.log(err); 
        } 
        else {
            console.log("200 OK");
            res.json(items);
        } 
    }); 
}); 

// Uploading the image 
app.post('/image', upload.any(), function (req, res, next) {
    if(req.files){
        req.files.forEach(function(file){
            let stringRandom= Math.random().toString(36).substring(7);
            var filename = (new Date).valueOf()+'-'+stringRandom+'-'+file.originalname;
            // var filename = (new Date).valueOf()+'-'+stringHash+'-'+file.originalname;
            fs.rename(file.path, 'public/images/'+filename, function(err){
                if(err) throw err;
                console.log("FILE UPLOUD");

                var image = new modelImg({
                    name: req.body.nome,
                    desc: req.body.desc,
                    img: filename
                });

                image.save(function(err, result){
                    if(err){
                        console.log(err);
                    }
                    res.json(result);
                });
            });

        });
    }
}); 

module.exports = app;