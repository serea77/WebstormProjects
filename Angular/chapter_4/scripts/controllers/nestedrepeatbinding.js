/**
 * Created by sebastien on 16-01-11.
 */
var myApp = angular.module('NestedRepeatBinding',[]);

myApp.controller("MyController", ['$scope',
    function($scope){
        $scope.orders = [
            {
                id: 1,
                transid:"123456",
                customer: "user1",
                created: "1/1/2015",
                details: [
                    {name:"product1", quantity:2, price:2.5},
                    {name:"product2", quantity:1, price:1.4},
                    {name:"product3", quantity:3, price:5.5},
                    {name:"product4", quantity:7, price:2.9}
                ]
            },
            {
                id: 2,
                transid:"123458",
                customer: "user2",
                created: "8/4/2015",
                details: [
                    {name:"product1", quantity:4, price:2.5},
                    {name:"product2", quantity:3, price:1.4},
                    {name:"product3", quantity:2, price:5.5},
                    {name:"product4", quantity:1, price:2.9}
                ]
            },
            {
                id: 3,
                transid:"128995",
                customer: "user4",
                created: "1/1/2015",
                details: [
                    {name:"product1", quantity:1, price:2.5},
                    {name:"product2", quantity:1, price:1.4},
                    {name:"product4", quantity:2, price:2.9}
                ]
            },
            {
                id: 4,
                transid:"123444",
                customer: "user5",
                created: "12/10/2015",
                details: [
                    {name:"product1", quantity:1, price:2.5},
                    {name:"product2", quantity:1, price:1.4}
                ]
            }

        ]
    }
])

