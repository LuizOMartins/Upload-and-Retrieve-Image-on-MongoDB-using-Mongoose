angular.module('image', ['ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/home', {
			templateUrl: 'partials/principal.html',
			controller: 'ImageController'
		});

		$routeProvider.when('/new', {
			templateUrl: 'partials/foto.html',
			controller: 'ImageController'
		});

		$routeProvider.when('/new/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'ImageController'
		});

		$routeProvider.otherwise({redirectTo: '/home'});

	});