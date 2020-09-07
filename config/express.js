var express = require('express') ;
var app = express() ;
var bodyParser = require('body-parser'); 
var fs = require('fs'); 
var path = require('path'); 
require('dotenv').config();
// var consign = require('consign');
app.use(express.static('./public'));
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
// Set EJS as templating engine  
// app.set("view engine", "ejs"); 


// consign({cwd: 'app'})
//     .include('models')
//     .then('api')
//     .then('routes')
//     .into(app);


var multer = require('multer');
var storage =  require('./multerconfig');
var upload = multer({ storage: storage }); 

 var imgModel = require('../app/models/image'); 

// Retriving the image 
app.get('/image', (req, res) => { 
    imgModel.find({}, (err, items) => { 
        console.log('buscando');
        if (err) { 
            console.log('ERROR GET',err); 
        } 
        else { 
            res.render('app', { items: items }); 
        } 
    }); 
}); 


// Uploading the image 
app.post('/image', upload.single('image'), (req, res, next) => {
  
    console.log('POST');
    var obj = { 
        name: req.body.name, 
        desc: req.body.desc, 
        img: { 
            data: fs.readFileSync(path.join('C:/Users/luyz_/Documents/GitHub/IMAGE/uploads/' + req.file.filename)),    
            contentType: 'image/png'
        } 
    } 
    imgModel.create(obj, (err, item) => { 
        console.log('criando imagems');
        if (err) { 
            console.log(err); 
        } 
        else { 
            // item.save(); 
            res.redirect('/'); 
        } 
    }); 
    console.log('sucesso');
}); 

module.exports = app;