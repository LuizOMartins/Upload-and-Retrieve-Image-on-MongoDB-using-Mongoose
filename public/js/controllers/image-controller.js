angular.module('image')
	.controller('ImageController', function($scope, $http) {



		function get(){
			console.log("AQUIs");
			$http.get('/image')
			.success(function(imagens) {
			$scope.imagens = imagens;
			console.log(imagens);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}




	});