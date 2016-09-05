//Get a reference to our existing yearNav module
var yearNav = angular.module('yearNav');

//Create a controller for the year-nav
yearNav.controller('YearListController', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {
	var self = this;

	self.setSelectedYear = function(year) {
		self.selectedYear = year;
	};


	self.setSelectedYear($route.current.params.year);



	self.years = [
		{
			year: "1995",
			shows: 48
		},
		{
			year: "1994",
			shows: 86
		},
		{
			year: "1993",
			shows: 65
		},
		{
			year: "1992",
			shows: 10
		}
	];


	$scope.$on('$routeChangeStart', function(event, next, current) {
		self.setSelectedYear(next.params.year);
	});

}]);

//Define the yearNav component, 
//setting it's template and
//directing it to use the YearListController.
yearNav.component('yearNav', {
	templateUrl: 'shows/year-nav/year-nav.html',
	controller: 'YearListController'
}); // end component
