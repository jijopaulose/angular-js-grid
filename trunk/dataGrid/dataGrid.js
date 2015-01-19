var gridApp=angular.module("gridApp",['ui.bootstrap']);

gridApp.controller('gridController', ['$scope','$http', function ($scope,$http) {

$scope.data=null;
$scope.header=null;

 $http.get("data.txt").success(function (data, status, headers, config) {
	$scope.data=data;
 })
 .error(function(data, status, headers, config) {
 });
 
 $http.get("header.txt").success(function (data, status, headers, config) {
	$scope.header=data;
 })
 .error(function(data, status, headers, config) {
 });
 
 $scope.setSort=function(index)
 {
	
 };

}]);