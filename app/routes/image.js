module.exports = function(app) {

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
	
	var api = app.api.image;

	app.route('/image')
		.get(api.lista)
		.post(upload.any(), api.adiciona);

	// app.route('/v1/fotos/:id')
	// 	.get(api.buscaPorId)
	// 	.delete(api.removePorId)
	// 	.put(api.atualiza);
};