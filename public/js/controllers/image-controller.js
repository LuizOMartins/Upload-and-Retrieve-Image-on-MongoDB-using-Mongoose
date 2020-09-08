angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};

		// $scope.data = {};
		
		$scope.getImages = function(){
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;

				// $scope.imagens.forEach(element => {
				// 	console.log('Nome:',element.name);
				// 	console.log('Image :',element.img);
				// 	console.log('Image DATA:',element.img.data);
				// 	console.log("TYPE",typeof element.img.data.data);
				// 	// element.img.data = element.img.data.toString('base64');
				// });

			console.log("IMAGENS",response);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}




	});