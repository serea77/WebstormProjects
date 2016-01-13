/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('SimpleBinding',[]);

myApp.controller('MyController', ['$scope',
    function($scope){
        $scope.customer = {};
    }
])
