var main = angular.module('main');

main.controller('MainController', ['$scope', '$routeParams', 'showsList', 'recordingsList', function($scope, $routeParams, showsList, recordingsList) {

	$scope.showsList = showsList;

}]);