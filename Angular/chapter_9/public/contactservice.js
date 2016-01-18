/**
 * Created by Sebastien on 2016-01-14.
 */
var myApp = angular.module('ContactService',[]);

myApp.service("DataService",function($http){
    this.save = function(data,callback){
        $http({
            method: "POST",
            url: "/contact/save",
            data: data,
            headers:{
                'Content-type': "application/json"
            }
        }).success(function(resp){
            callback(resp)
        }).error(function(){
            callback(undefined);
        });
    };

    this.read = function(callback){
        $http({
            method: "GET",
            url: "/contact/getall",
            headers: {
                "Content-type": "application/json"
            }
        }).success(function (resp){
            callback(resp);
        }).error(function(){
            callback(undefined)
        });
    }

    this.delete = function(id, callback){
        var postdata = {
            id : _id
        };
        $http({
            method: "POST",
            url: '/contact/delete',
            data: postdata,
            headers:{
                "Content-type": "application/json"
            }
        }).success(function(resp){
            callback(resp);
        }).error(function(){
            callback(undefined);
        });
    }

});

myApp.controller("MyController", function($scope,DataService){
    $scope.contacts=[];
    $scope.contact={};
    $scope.result={};

    $scope.getAllData = function(){
        DataService.read(function(data){
            $scope.contacts = data;
        })
    };
    $scope.edit = function(contact){
        $scope.contact = contact;
    };
    $scope.delete = function(id){
        var r = confirm("Are you sure to delete this item?");
        if(r === true){
            DataService.delete(id,function(code,err){
                if(code === 1){
                    alert("Delete data was a success");
                }
                else{
                    alert("Delete data was a failed. Error"+err);
                }
            })
        }
    };
    $scope.save = function(){
        console.log($scope.contact);
        DataService.save($scope.contact, function(code,err){
            if(code == 1){
                alert("Saved data was a success");
            }else{
                alert("Saved data was failed. Error:  ")
            }
            $scope.result = err;
            $scope.contact = {};
        });

    };
});