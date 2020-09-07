var multer = require('multer');
  
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'C:/Users/luyz_/Documents/GitHub/IMAGE/uploads/'); 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 

module.exports = storage;