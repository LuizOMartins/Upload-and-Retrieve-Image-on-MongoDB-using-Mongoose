angular.module('image')
	.controller('ImageController', function($scope, $http) {

		$scope.imagens = {};

		$scope.getImages = function(){
			$http.get('/image')
			.success(function(response) {
				$scope.imagens = response;

				$scope.imagens.forEach(element => {
					element.img.data = arrayBufferToBase64(element.img.data.data);
				});
				
			console.log("IMAGENS",response);
		})
		.error(function(erro) {
			console.log(erro);
		});
		}

		function arrayBufferToBase64(buffer) {
			let binary = '';
			let bytes = new Uint8Array(buffer);
			let len = bytes.byteLength;
			for (let i = 0; i < len; i++) {
				binary += String.fromCharCode(bytes[i]);
			}
			return window.btoa(binary);
		}


	});