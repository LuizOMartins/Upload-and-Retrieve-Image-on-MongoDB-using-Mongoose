var http = require('http');
var app = require('./config/express');
require('dotenv').config();
require('./config/database')('mongodb://localhost:'+process.env.PORT+'/'+process.env.DB);

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado');
});
