angular.module('image', ['ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {


		$routeProvider.otherwise({redirectTo: '/'});

	});