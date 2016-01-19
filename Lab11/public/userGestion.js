/**
 * Created by Sebastien on 2015-12-03.
 */
var baseUrl = "http://localhost:8080"
var template = _.template($("#users-template").html());

$(document).ready(function(){

    loadUsers();

    $("#simple-user-container").hide();
    $("#complete-user-container").hide();
    $("#favorite-user-container").hide();
    $("#userButtonsContainer").hide();

    $("#ajouterUserBouton").click(function(event){
        $("#favorite-user-container").hide();
        $("#complete-user-container").hide();
        $("#simple-user-container").show();
        $("#userButtonsContainer").show();
    });
    $("#completeUserButton").click(function(event){
        $("#favorite-user-container").hide();
        $("#complete-user-container").show();
        $("#simple-user-container").hide();
    });
    $("#simpleUserButton").click(function(event){
        $("#favorite-user-container").hide();
        $("#complete-user-container").hide();
        $("#simple-user-container").show();
    })
    $("#preferenceUserButton").click(function(event){
        $("#favorite-user-container").show();
        $("#complete-user-container").hide();
        $("#simple-user-container").hide();
    })

    $("#submitSimpleButton").click(function(event) {
        var name = $("#nameInput").val();
        var password = $("#passwordInput").val();
        var user = {
                "user": {
                    "type": "simple",
                    "name": name,
                    "password": password}
        };
        $("#simple-user-container").hide();
        postUser(user);

    })
    $("#submitCompleteButton").click(function(event){
        var name = $("#nameCompleteInput").val();
        var password = $("#passwordCompleteInput").val();
        var addressRue = $("#addressStreetInput").val();
        var city = $("#cityInput").val();
        var province = $("#provinceInput").val();
        var country = $("#countryInput").val();
        var postalCode = $("#postalCodeInput").val();
        var email = $("#emailInput").val();
        var phone = $("#phoneInput").val();
        var user = {
            "user": {
                "type": "complete",
                "name": name,
                "password": password,
                "address": {
                    "streetAdress": addressRue,
                    "city": city,
                    "province": province,
                    "country": country,
                    "postalCode": postalCode
                },
                "phoneNumber": phone,
                "email": email
            }
        };
        $("#complete-user-container").hide();
        postUser(user);

    })
    $("#submitFavoriteButton").click(function(event){
        var name = $("#nameFavoriteInput").val();
        var password = $("#passwordFavoriteInput").val();
        var addressRue = $("#addressStreetFavoriteInput").val();
        var city = $("#cityFavoriteInput").val();
        var province = $("#provinceFavoriteInput").val();
        var country = $("#countryFavoriteInput").val();
        var postalCode = $("#postalCodeFavoriteInput").val();
        var email = $("#emailFavoriteInput").val();
        var phone = $("#phoneFavoriteInput").val();
        var system = $("#videoGameSystemFavoriteInput").val();
        var game = $("videoGamesFavoriteInput").val();

        var user = {
            "user": {
                "type": "favorite",
                "name": name,
                "password": password,
                "address": {
                    "streetAdress": addressRue,
                    "city": city,
                    "province": province,
                    "country": country,
                    "postalCode": postalCode
                },
                "phoneNumber": phone,
                "email": email,
                "system": system,
                "game": game
            }
        };
        $("#favorite-user-container").hide();
        postUser(user);
    })
})
var postUser = function(user){
    var request = $.ajax({
        url: baseUrl+"/users",
        type: "POST",
        data: JSON.stringify(user),
        contentType: "application/json"});

    request.done(function (data){
        loadUsers();
    });
};


var loadUsers = function(){
    var request = $.ajax({
        url: baseUrl+"/users",
        type: "GET"
    })
    request.done(function(data){
        console.log("je veux afficher les usagers")
        console.log(data);
        var usagers = data;
        $("#userContainer").html(template({users: usagers}))
        $(".effaceUserBouton").click(function(event){
            var name = event.target.id;

            $.ajax({
                url: baseUrl +"/users/"+name,
                type: "DELETE",
                contentType: "application/json",
                success: function(data){
                    loadUsers();
                }

            })
        });
        $(".modifierUserBouton").click(function(event){
            var name = event.target.id;

            $.ajax({
                url: baseUrl +"/user/"+name,
                type: "GET",
                contentType: "application/json",
                success: function(data){
                    console.log("je veux modifier")
                    console.log(data);
                    var user = data[0];
                    console.log(user);
                    if(user.type === "simple"){
                        alert("allo");
                        $("#simple-user-container").show();
                        $("#nameInput").val(user.name);
                        $("#passwordInput").val(user.password);

                    }

                }


            })

        })

    })
};
