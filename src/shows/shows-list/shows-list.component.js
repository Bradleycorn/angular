//Get a reference to our existing yearNav module
var showsList = angular.module('showsList');

//Create a controller for the year-nav
showsList.controller('ShowListController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	var self = this;

	self.year = $routeParams.year;

}]);

//Define the yearNav component, 
//setting it's template and
//directing it to use the YearListController.
yearNav.component('showsList', {
	templateUrl: 'shows/shows-list/shows-list.html',
	controller: 'ShowListController',
	bindings: {
		'shows': '<'
	}
}); // end component
