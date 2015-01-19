var gridApp=angular.module("gridApp",['ui.bootstrap']);

gridApp.controller('gridController', ['$scope','$http','$filter', function ($scope,$http,$filter) {

$scope.data=null;
$scope.header=null;
$scope.filter=[];
var orderBy = $filter('orderBy');

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
 
 $scope.setSort=function(index,sort)
 {
	$scope.header[index].sort=sort;
	if(sort==null)
	{
		var i= $scope.filter.indexOf("+"+$scope.header[index].model);
		if (i > -1) {
			$scope.filter.splice(i, 1);
		}
		else
		{
			i= $scope.filter.indexOf("-"+$scope.header[index].model);
			if (i > -1) {
				$scope.filter.splice(i, 1);
			}
		}
	}
	else if(sort=='+')
	{
		var i= $scope.filter.indexOf("+"+$scope.header[index].model);
		if (i == -1) {
			var j= $scope.filter.indexOf("-"+$scope.header[index].model);
			if (j > -1) {
				$scope.filter.splice(j, 1,"+"+$scope.header[index].model);
			}
			else{
				$scope.filter.push("+"+$scope.header[index].model);				
			}
		}
	}
	else if(sort=='-')
	{
		var i= $scope.filter.indexOf("-"+$scope.header[index].model);
		if (i == -1) {
			var j= $scope.filter.indexOf("+"+$scope.header[index].model);
			if (j > -1) {
				$scope.filter.splice(j, 1,"-"+$scope.header[index].model);
			}
			else{
				$scope.filter.push("-"+$scope.header[index].model);				
			}
		}
	}
	$scope.data=orderBy($scope.data,$scope.filter);
	//var filter=$scope.header[index].model;
	
 };

}]);