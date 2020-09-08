angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};

		// $scope.data = {};
		
		$scope.getImages = function(){
			console.log("CLICOU");
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;

				$scope.imagens.forEach(element => {
					console.log('Nome:',element.name);
					console.log('Image :',element.img);
					console.log('Image DATA:',element.img.data);
					console.log("TYPE",typeof element.img);
					
				});

			console.log("IMAGENS",response);
			// console.log(imagens.img);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}




	});