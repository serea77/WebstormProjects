/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('RepeatBinding',[]);

myApp.controller('MonController', ['$scope',
    function($scope){
        $scope.customers = [
            {name:"user1", email:"user1@email.com", country:"UK"},
            {name:"user2", email:"user2@email.com", country:"NL"},
            {name:"user3", email:"user3@email.com", country:"DE"},
            {name:"user4", email:"user4@email.com", country:"CA"},
            {name:"user5", email:"user5@email.com", country:"CH"}
        ]
    }])

