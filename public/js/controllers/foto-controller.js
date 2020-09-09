angular.module('image')
	.controller('FotoController', function($scope, $resource, $routeParams, $http) {

		$scope.foto = {};
        $scope.mensagem = '';
        
		$scope.submeter = function() {
			console.log('SUBMETEU');

			var file = document.getElementById('image').files[0];
			console.log("FILE",file);
			readerFile = new FileReader();

			readerFile.onloadend = function(e) {
			var data = e.target.result;
			console.log("DATA", data);
			
			//send your binary data via $http or $resource or do anything else with it
			}

			
			$scope.foto.img = file;
			// $scope.foto.img = r;

			// if ($scope.formulario.$valid) {
				$http.post('/image', $scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			// }
        };
        





	});