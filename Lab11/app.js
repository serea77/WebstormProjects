
var http    =   require('http');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();



var databaseUrl = "myDatabase";
var collections = ["chien"];
var db = require("mongojs")(databaseUrl, collections);

var corsOptions = {
   origin: '*',
   methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'UPDATE']
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('static', express.static(__dirname +"/public"));
//app.get('/',function(req,res) {req.sendFile(__dirname + "/index.html")});

app.get('/users', function(request, response){
   response.setHeader('Content-Type', 'application/json');
   db.chien.find({}, {_id: 0}).toArray(function(error,array){
      response.status(200).send(array);
   });
});

app.get('/user/:name', function(request, response){
   var name = request.params.name;
   response.setHeader('Content-Type','application/json');
   db.users.find({name: name}, {_id: 0}).toArray(function(error,array){
      if(array.length === 0){
         response.status(404).send({'error': "user not found"});

      }
      else{
         response.status(200).send(array);
      }

   });
});
app.post('/users', function(request,response){
   var user = request.body.user;
   if(!user||user['name']==''){
      console.log("moutarde noire de carrossse!")
      response.status(400).send({'error': 'Bad request '});

   }
   else{
      response.setHeader('Content-Type', 'application/json');
      db.users.save(user);
      response.status(201).send({'user': user});
   }
});

app.delete('/users/:name', function(request,response){
   var name = request.params.name;
   db.users.remove({name: name}, function(error,result){
      console.log("result : " +result);
      if(result.n == 0){
         response.status(404).send({'error': "user not found"});
      }
      else{
         response.status(200).send();
      }
   })
});
app.put('/users/:name', function(request, response){
   var name = request.params.name;
   var user = request.body.user;
   if(!user||user['name'] == ''){
      response.status(400).send({'error': 'Bad request'})
   }
   else{
      db.users.update({name:name}, user, function(error,result){
         if(result.n == 0){
            response.status(404).send({'error': 'User not found'});
         }
         else{
            response.status(200).send(user);
         }
      })
   }
})

app.get('/', function(request, response) {
   response.send("Hello World");
});


console.log("listen port 8080");
app.listen(8080);
