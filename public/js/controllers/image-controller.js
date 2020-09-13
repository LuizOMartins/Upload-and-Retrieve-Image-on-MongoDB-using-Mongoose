angular.module('image')
	.controller('ImageController', function($scope, $http, $resource) {

		var resourceFoto = $resource('/image/:fotoId', null, { //  o parametro null e queryString
			'update' : { //informando a funcao e seu tipo de method a set usando
				method: 'PUT'
			}
		});

		$scope.imagens = {};
		$scope.mensagem = '';
		
		$http.get('/image')
		.success(function(response) {
			$scope.imagens = response;
			console.log("IMAGENS",response);
		})
		.error(function(erro) {
			console.log(erro);
		});

		$scope.remover = function(foto) {
			resourceFoto.delete({fotoId: foto._id}, function() { // delete a foto e uma função de call back para remove da View
				var indiceDaFoto = $scope.imagens.indexOf(foto);
				$scope.imagens.splice(indiceDaFoto, 1);
				$scope.mensagem = 'Foto ' + foto.name + ' removida com sucesso!';
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
			});
		};

		$scope.getImages = function(){
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;
				console.log("IMAGENS",response);
				
				// $scope.imagens.forEach(element => {
				// 	element.img.data = arrayBufferToBase64(element.img.data.data);
				// });
		})
		.error(function(erro) {
			console.log(erro);
		});
		}

		// function arrayBufferToBase64(buffer) {
		// 	let binary = '';
		// 	let bytes = new Uint8Array(buffer);
		// 	let len = bytes.byteLength;
		// 	for (let i = 0; i < len; i++) {
		// 		binary += String.fromCharCode(bytes[i]);
		// 	}
		// 	return window.btoa(binary);
		// }


	});