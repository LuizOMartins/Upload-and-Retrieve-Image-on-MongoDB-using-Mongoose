var mongoose = require('mongoose') ;

var imageSchema = new mongoose.Schema({ 
    name: { type: String}, 
    desc: {type : String}, 
    img:  String
}); 

module.exports = new mongoose.model('imagens', imageSchema); 