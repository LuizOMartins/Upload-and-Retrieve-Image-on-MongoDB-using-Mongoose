angular.module('image')
	.controller('FotoController', function($scope, $resource, $routeParams, $http) {

		$scope.foto = {};
		$scope.mensagem = '';
		$scope.item = {};
		$scope.item.name =  $scope.foto.nome;
		$scope.item.desc =  $scope.foto.desc;

		var resourceFoto = $resource('/image/:fotoId', null, { //  o parametro null e queryString
			'update' : { //informando a funcao e seu tipo de method a set usando
				method: 'PUT'
			}
		});

		if($routeParams.fotoId) {
			resourceFoto.get({fotoId: $routeParams.fotoId}, function(reponse) {
				$scope.foto.nome = reponse.name; 
				$scope.foto.desc = reponse.desc; 
				$scope.foto.img =  reponse.img;
				$("#image-foto").attr("src", 'http://localhost:3000/images/'+reponse.img);
			}, function(erro) {
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submit =  function(){

			var formData =  new FormData();
			for (key in $scope.foto){
				formData.append(key, $scope.foto[key]);
			}
			
			var file  =  $('#imageform')[0].files[0];
			formData.append('image',file);

			// if($scope.foto._id) { // se a foto já existir
			// 	console.log('UPDATE - JA EXITE');
			// 	resourceFoto.update({fotoId: foto._id}, foto, function() {
			// 		resolve({
			// 			mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
			// 			inclusao: false
			// 		});
			// 	}, function(erro) {
			// 		console.log(erro);
			// 		reject({
			// 			mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
			// 		});
			// 	});
			// } else {
				console.log('POST - NOVA');

				$http.post("/image", formData, {
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined}
				}).then(function(res){
					$scope.item =  res.data;
				});
			}

		// }



	});