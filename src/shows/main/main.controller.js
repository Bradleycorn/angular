var Year = angular.module('year',[
	'ngRoute',
	'showsList'
]);

Year.controller('YearController', ['$scope', '$routeParams', function($scope, $routeParams) {

	$scope.year = parseInt($routeParams.year, 10);
	$scope.showList = ($scope.year >=1992 && $scope.year <= 1995);


}]);