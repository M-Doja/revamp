(function() {
	'use strict';
	angular.module('app', ['ui.router','ngMaterial', 'ui.bootstrap','ngAnimate','ngMdIcons'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/Home.html',
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
		}).state('Blog',{
			url: '/blog',
			templateUrl: 'views/blognation.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Chat',{
			url: '/chat',
			templateUrl: 'views/chattime.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('MicDoja',{
			url: '/micdoja',
			templateUrl: 'views/micdoja.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Travstate',{
			url: '/travstate',
			templateUrl: 'views/travstate.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
