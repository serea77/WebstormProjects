/**
 * Created by sebastien on 16-01-13.
 */
var myApp = angular.module("MyDataService",[]);
myApp.service("DataService", function($http) {
    this.getData = function(callback){
        $http({
            method:"GET",
            url:"sample.json",
            headers: {
                "Content-type": "application/json"
            }
        }).success(function(data){
            callback(data)
        }).error(function(){
            callback(undefined);
        })
    }
});
myApp.controller("MyController",function($scope, DataService){
    $scope.users = null;
    $scope.getAllUsers = function(){
        DataService.getData(function(data){
            $scope.users = data;
        });
    };
});