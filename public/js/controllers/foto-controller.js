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
					console.log(erro);
				});
			// }
        };
        
		$scope.uploadFile = function(){

			var file = $scope.myFile;
			var uploadUrl = "/image";
			var Form = new FormData();
			console.log("nome",$scope.foto.nome)
			Form.append('nome', $scope.foto.nome );
			Form.append('desc', $scope.foto.desc );

			var img = new Image();  
			img  = file;

			Form.append('img', file);
			console.log("FORMULARIO",Form);
			$http.post(uploadUrl, Form, {
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			})
			.success(function(){
			  console.log("success!!");
			})
			.error(function(error){
			  console.log("error!!", error);
			});
		};




	});