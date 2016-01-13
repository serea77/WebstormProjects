/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module("LogService", []);
myApp.controller('LogController', function($scope, $log){
    $scope.$log = $log;
    $scope.message ="AngularJS"
})
