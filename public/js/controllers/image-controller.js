angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};
		
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;
				console.log("IMAGENS",response);
		})
		.error(function(erro) {
			console.log(erro);
		});
	

		$scope.imagens = {};
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