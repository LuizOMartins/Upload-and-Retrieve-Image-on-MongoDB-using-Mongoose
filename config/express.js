var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var fs = require('fs'); 
var path = require('path'); 
var mongoose = require('mongoose') ;


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
// var storage =  require('./multerconfig');
// var upload = multer({ storage: storage }); 

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


// var Imagem = mongoose.model('imagens',{ 
//     name: { type: String}, 
//     desc: {type : String}, 
//     img:  String
// }); 

// Uploading the image 
app.post('/image', upload.any(), function (req, res, next) {
  
    console.log('REQ FILES',req.files);
    console.log(req.file);
    console.log('POST');
    console.log('BODY',req.body);
    console.log("desc", req.body.desc );
    console.log("IMG", req.body.img );
    console.log("TYPE", req.body.img );


    if(req.files){
        req.files.forEach(function(file){
            console.log(file);
            var filename = (new Date).valueOf()+'-'+file.originalname;
            fs.rename(file.path, 'public/images/'+filename, function(err){
                if(err) throw err;
                console.log("FILE UPLOUD");

                // var image = new imageSchema({
                //     name: req.body.nome,
                //     desc: req.body.desc,
                //     img: filename
                // });
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
    // console.log(typeof(req.file.filename));:
    // console.log(req.file.filename);
    // var obj = { 
    //     name: req.body.nome, 
    //     desc: req.body.desc, 
    //     img: { 
    //         data: fs.readFileSync(path.join('C:/Users/luyz_/Documents/GitHub/IMAGE/uploads/' + req.file.filename)),    
    //         contentType: 'image/png'
    //     } 
    //     // img: { 
    //     //     data: fs.readFileSync(path.join('C:/Users/luyz_/Documents/GitHub/IMAGE/uploads/' + req.img.filename)),    
    //     //     contentType: 'image/png'
    //     // } 

    // } 

    // console.log();
    // imgModel.create(obj, (err, item) => { 
    //     console.log('criando imagems');
    //     if (err) { 
    //         console.log(err); 
    //     } 
    //     else { 
    //         // item.save(); 
    //         // res.redirect('/'); 
    //         res.sendStatus(200);
    //     } 
    // }); 
    // console.log('sucesso');
}); 

module.exports = app;