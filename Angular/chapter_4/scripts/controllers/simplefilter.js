/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('SimpleFilter',[]);

myApp.controller('MonController', ['$scope',
    function($scope){
        $scope.customers = [
            {name:"Camille", email:"camille@email.com", country:"UK"},
            {name:"Alex", email:"alex2@email.com", country:"NL"},
            {name:"Sophie", email:"sophie3@email.com", country:"DE"},
            {name:"Kim", email:"kim@email.com", country:"CA"},
            {name:"Marie", email:"marie5@email.com", country:"CH"}
        ]
    }])
