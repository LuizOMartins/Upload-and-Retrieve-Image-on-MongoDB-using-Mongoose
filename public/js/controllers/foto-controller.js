angular.module('image')
	.controller('FotoController', function($scope, $resource, $routeParams, $http) {

		$scope.foto = {};
        $scope.mensagem = '';
        
		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				$http.post('/image', $scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
        };
        





	});