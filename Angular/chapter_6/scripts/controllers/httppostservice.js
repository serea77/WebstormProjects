/**
 * Created by sebastien on 16-01-13.
 */
var myApp = angular.module("MyDataService",[]);

myApp.service("DataService", function($http, $httpParamSerializerJQLike){
    this.postData = function(data,callback){
        $http({
            method: "POST",
            url: "post.json",
            data: $httpParamSerializerJQLike({data}),
            contentType: "application/json",
        }).success(function(resp){
            callback(resp);
        }).error(function(){
            callback(undefined);
        })
    }
});
myApp.controller("MyController", function($scope,DataService){
    $scope.customer= {};
    $scope.result = {};
    $scope.save = function(){
        DataService.postData($scope.customer, function(data){
            console.log(data);
            $scope.result = data;
        });
    };
});