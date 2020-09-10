var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var fs = require('fs'); 
var path = require('path'); 
app.use(express.static('./public'));
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT");
    next();
});

// consign({cwd: 'app'})
//     .include('models')
//     .then('api')
//     .then('routes')
//     .into(app);


var multer = require('multer');
var  upload = multer({dest:'uploads/'});
var imgModel = require('../app/models/image'); 

// Retriving the image 
app.get('/image', (req, res) => { 
    imgModel.find({}, (err, items) => { 
        console.log('BUSCANDO...');
        if (err) { 
            res.sendStatus(500);
            console.log('ERROR GET',err); 
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
            console.log(file);
            var filename = (new Date).valueOf()+'-'+file.originalname;
            fs.rename(file.path, 'public/images/'+filename, function(err){
                if(err) throw err;
                console.log("FILE UPLOUD");

                var image = new imgModel({
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