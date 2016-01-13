/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('ContactModule',[]);

myApp.controller('ContactController', ['$scope',
function($scope){
    $scope.contact = {
    name: "Camille Breton",
    email: "camillebreton@gmail.com",
    phone: "4186618182"
    };

    $scope.calculate = function(a,b){
        return(a+b*3)
    }
}])