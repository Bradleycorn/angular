//Get a reference to our existing yearNav module
var showsList = angular.module('showsList');

//Create a controller for the year-nav
showsList.controller('ShowListController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	this.selectedYear = $routeParams.year || null;

	this.shows = [
		{
			title: '07-08-' + this.selectedYear,
			location: 'Red Rocks, CO',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: (2463 + parseInt(this.selectedYear, 10))
		},
		{
			title: '06-15-' + this.selectedYear,
			location: 'Louisville, KY',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: (5632 + parseInt(this.selectedYear, 10))
		},
		{
			title: '05-08-' + this.selectedYear,
			location: 'Ithica, NY',
			source: '3 source matrix from mix of audience source id 95445, soundboard source id 114369, and audience source id 86405',
			isSoundboard: false,
			downloads: (129 + parseInt(this.selectedYear, 10))
		},
		{
			title: '02-24-' + this.selectedYear,
			location: 'San Diego, CA',
			source: '3 source matrix from mix of audience source id 95445, soundboard source id 114369, and audience source id 86405',
			isSoundboard: false,
			downloads: (6254 + parseInt(this.selectedYear, 10))
		},
		{
			title: '12-31-' + this.selectedYear,
			location: 'San Francisco, CA',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: (3425 + parseInt(this.selectedYear, 10))
		},
		{
			title: '08-12-' + this.selectedYear,
			location: 'Phoenix, AZ',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: (1833 + parseInt(this.selectedYear, 10))
		},
		{
			title: '9-10-' + this.selectedYear,
			location: 'New York, NY',
			source: '3 source matrix from mix of audience source id 95445, soundboard source id 114369, and audience source id 86405',
			isSoundboard: false,
			downloads: (896 + parseInt(this.selectedYear, 10))
		},
		{
			title: '04-16-' + this.selectedYear,
			location: 'Hartford, CT',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: (453 + parseInt(this.selectedYear, 10))
		},
		{
			title: '02-02-',
			location: 'Kansas City, MO',
			source: '3 source matrix from mix of audience source id 95445, soundboard source id 114369, and audience source id 86405',
			isSoundboard: false,
			downloads: 1243
		},
		{
			title: '07-13-',
			location: 'Des Moines, IA',
			source: 'dsbd(pre-FM)&gt;dat',
			isSoundboard: true,
			downloads: 3425
		}
	];

}]);

//Define the yearNav component, 
//setting it's template and
//directing it to use the YearListController.
yearNav.component('showsList', {
	templateUrl: 'shows/shows-list/shows-list.html',
	controller: 'ShowListController'
}); // end component
