/**
 * Created by Sebastien on 2016-01-17.
 */
var myApp = angular.module("MonServiceMeteo",[]);

myApp.service("MeteoService", function($http){
    var urlQuebec = "http://api.wunderground.com/api/19817d3880db97fb/forecast7day/geolookup/q/46.80394,-71.19721985.json";
    this.getData = function(callback){
        $http.get(urlQuebec).success(function(data){
            console.log("on a gagne");
            console.log(data);
            callback(data);
        }).error(function(){
            console.log("Merde de merde");
            callback(undefined);
        });
    };
});

myApp.controller("meteoController", function($scope, MeteoService){
        $scope.jours = null;
        $scope.location = "";
        MeteoService.getData(function(data){
                $scope.location = data.location.city;
                console.log($scope.location.city);
                $scope.jours = data.forecast.simpleforecast.forecastday;
                console.log("voici les jours de la semaine");
                console.log($scope.jours);
        });
})
