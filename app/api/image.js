var mongoose = require('mongoose');
var fs = require('fs'); 

module.exports = function(app) {
    var api = {};
    var modelImg = mongoose.model('imagens');

	api.lista = function(req, res) {
		modelImg.find()
		.then(function(response) {
            console.log('BUSCANDO...');
			res.json(response);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

        // Uploading the image 
        api.adiciona = function(req, res, next) {
            console.log('aqui');
            if(req.files){
                console.log('DENTRO IF')
                req.files.forEach(function(file){
                    let stringRandom= Math.random().toString(36).substring(7);
                    var filename = (new Date).valueOf()+'-'+stringRandom+'-'+file.originalname;
                    // var filename = (new Date).valueOf()+'-'+stringHash+'-'+file.originalname;
                    fs.rename(file.path, './public/images/'+filename, function(err){
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
        };

    return api;
};

