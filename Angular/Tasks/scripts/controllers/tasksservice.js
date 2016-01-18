/**
 * Created by Sebastien on 2016-01-17.
 */
var myApp = angular.module("MyTaskService",[]);

myApp.service("TaskService", function($http){
    var urlTask = "http://localhost:5000/tasks";
    this.getTask = function(callback) {
        $http.get(urlTask).success(function (data) {
                callback(data.tasks);
            });
    };
    this.addTask = function(data,callback){
        $http.post(urlTask+"/"+data.id,data).success(function(data){
            $http.get(urlTask).success(function (data) {
                callback(data.tasks);
            });
            $("#zoneNouvelleTache").hide();
        });

    }
    this.modifyTask = function(data,callback){
        $http.put(urlTask+"/"+data.id, data).success(function(data){
            callback(data);
        })
    }
    this.deleteTask = function(id, callback){
        $http.delete(urlTask+"/"+id).success(function(data){
            callback(data);
        })

    }
});

myApp.controller("TaskController", function($scope, TaskService){
    $scope.tasks = null;
    $scope.task = null;
    $("#zoneNouvelleTache").hide();
    TaskService.getTask(function(data){
        $scope.tasks = data;
    });

    $scope.addTask = function(){
        $("#zoneNouvelleTache").show();
    };

    $scope.saveNewTask = function(){
        var value = $("#nouvelleTache").val();
        var id =  Math.floor((Math.random()*1000000)+1);
        $scope.task = {
            "id": id,
            "task": value
        }
        TaskService.addTask($scope.task,function(){
            TaskService.getTask(function(data){
                $scope.tasks = data;
            });
            $("#zoneNouvelleTache").hide();
        })
    };
    $scope.saveChangeTask = function() {
        var id = $(event.target)[0].id;
        var task = $(event.target).parent().find(".task-content").val();
        $scope.task = {"id": id, "task": task};
        TaskService.modifyTask($scope.task, function () {
            TaskService.getTask(function (data) {
                $scope.tasks = data;
            });
        });
    };
    $scope.deleteTask = function(){
        var id = $(event.target)[0].id;
        TaskService.deleteTask(id, function(){
            TaskService.getTask(function (data) {
                $scope.tasks = data;
            });
        })
    }
})

