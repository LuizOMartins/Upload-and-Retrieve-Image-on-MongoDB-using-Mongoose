angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};
		// $scope.data = {};
		
		$scope.getImages = function(){
			console.log("CLICOU");
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;
			console.log("IMAGENS",response);
			// console.log(imagens.img);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}




	});