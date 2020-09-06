var http = require('http');
var app = require('./config/express');
require('dotenv').config();
require('./config/database')('mongodb://localhost:'+process.env.PORT+'/'+process.env.DB);

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado');
});


// mongoose.connect('mongodb://localhost:'+process.env.PORT+'/'+process.env.DB, 
// { useNewUrlParser: true, useUnifiedTopology: true }, err => { 
// console.log('connected') 
// }); 




// *************************************************************************






// var fs = require('fs'); 
// var path = require('path'); 
// require('dotenv').config();



// mongoose.connect('mongodb://localhost:'+process.env.PORT+'/'+process.env.DB, 
// { useNewUrlParser: true, useUnifiedTopology: true }, err => { 
// console.log('connected') 
// }); 


  
// var storage = multer.diskStorage({ 
//     destination: (req, file, cb) => { 
//         cb(null, 'uploads') 
//     }, 
//     filename: (req, file, cb) => { 
//         cb(null, file.fieldname + '-' + Date.now()) 
//     } 
// }); 
  
// var upload = multer({ storage: storage }); 

// var imgModel = require('./model'); 


// // Retriving the image 
// app.get('/', (req, res) => { 
//     imgModel.find({}, (err, items) => { 
//         if (err) { 
//             console.log(err); 
//         } 
//         else { 
//             res.render('app', { items: items }); 
//         } 
//     }); 
// }); 


// // Uploading the image 
// app.post('/', upload.single('image'), (req, res, next) => { 
  
//     var obj = { 
//         name: req.body.name, 
//         desc: req.body.desc, 
//         img: { 
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
//             contentType: 'image/png'
//         } 
//     } 
//     imgModel.create(obj, (err, item) => { 
//         if (err) { 
//             console.log(err); 
//         } 
//         else { 
//             // item.save(); 
//             res.redirect('/'); 
//         } 
//     }); 
// }); 


// app.listen('3000' , err => { 
//     if (err) 
//         throw err 
//     console.log('Server started') 
// });

