angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};
		
		$scope.getImages = function(){
			console.log("CLICOU");
			$http.get('/image')
			.success(function(imagens) {
				$scope.imagens = imagens;
			console.log("IMAGENS",imagens);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}

		


	});