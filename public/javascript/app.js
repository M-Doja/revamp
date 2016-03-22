(function() {
	'use strict';
	angular.module('app', ['ui.router','ngMaterial', 'ui.bootstrap','ngAnimate'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Experience',{
			url: '/experience',
			templateUrl: 'views/Experience.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Contact',{
			url: '/contact',
			templateUrl: 'views/Contact.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
