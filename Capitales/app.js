/**
 * Created by sebastien on 16-01-19.
 */
var http = require("http");
var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var databaseUrl = "capitalesDB";
var collections = ["players"];
var db = require("mongojs")(databaseUrl, collections);


var corsOptions = {
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "PUT", "PATCH", "UPDATE"]
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("static", express.static(__dirname+"/public"));

app.get('/players', function(request,response){
   response.setHeader('Content-Type', 'application/json');
    db.players.find().toArray(function(error, array){
        console.log("status 200");
        console.log(array);

        response.status(200).send(array);
    })
});

console.log("listen on port 8080");
app.listen(8080);
