
(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController(HomeFactory) {



		var vm = this;
		vm.title = 'Micah Dunson';
		vm.Contitle = '';
		vm.XPtitle = '';
		vm.user = {}
		vm.summary = false;


		vm.openNav = function() {
				 document.getElementById("mySidenav").style.width = "250px";
		 }
		vm.closeNav = function() {
				 document.getElementById("mySidenav").style.width = "0";
		 }

		// vm.show = function() {
		// 	vm.summary = true;
		// }
		// vm.hide = function(){
		// 	vm.summary = false;
		// }


	}
})();
