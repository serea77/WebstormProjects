/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('InputValidation',[]);

myApp.controller('MyController',['$scope',
    function($scope){
        $scope.submitForm = function(isValid){
            if(isValid){
                alert("Data was saved")
            }
        }
    }
])
