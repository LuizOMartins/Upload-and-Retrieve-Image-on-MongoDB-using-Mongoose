angular.module('image')
	.controller('FotoController', function($scope, $resource, $routeParams, $http) {

		$scope.foto = {};
		$scope.mensagem = '';
		$scope.item = {};
		$scope.item.name =  $scope.foto.nome;
		$scope.item.desc =  $scope.foto.desc;



		$scope.submit =  function(){
			var formData =  new FormData();
			for (key in $scope.foto){
				formData.append(key, $scope.foto[key]);
			}
			var file  =  $('#imageform')[0].files[0];
			formData.append('image',file);
			console.log("FILE",file);
			$http.post("/image", formData, {
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			}).then(function(res){
				$scope.item =  res.data;

			});

		}


	});