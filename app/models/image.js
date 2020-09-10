var mongoose = require('mongoose') ;

// var imageSchema = new mongoose.Schema({ 
//     name: String, 
//     desc: String, 
//     img: 
//     { 
//         data: Buffer, 
//         contentType: String 
//     } 
// }); 


var imageSchema = new mongoose.Schema({ 
    name: { type: String}, 
    desc: {type : String}, 
    img:  String
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('imagens', imageSchema); 