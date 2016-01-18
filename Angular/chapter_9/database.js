/**
 * Created by Sebastien on 2016-01-14.
 */
var mongo = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;

var dbUrl = "mongodb://localhost:47014/office";

var database = module.exports = function(){
    console.log('database was instanced');
}

database.prototype.getAll = function(callback){
    mongo.connect(dbUrl, function(err,db){
        if(!err){
            db.collection('contacts', function(err,coll){
                coll.find().toArray((function(err,items){
                    db.close();
                    callback(null,items)
                }))
            })
        }
        else{
            db.close();
            callback(err,null);
        }
    })
}

database.prototype.save = function(contact , callback) {
    mongo.connect(dbUrl, function (err, db) {
        if (!err) {
            console.log("il yen a pas de probleme");
            db.collection('contacts', function (err, coll) {
                if (contact._id) {
                    coll.update({_id: ObjectID(contact._id)},
                        {$set: {name: contact.name, email: contact.email, phone: contact.phone}},
                        function (err, numberUpdated) {
                            db.close();
                            if (numberUpdated > 0) {
                                callback(1);
                            }
                            else {
                                callback(-1, err);
                            }
                        });
                }
                else {
                    coll.insert(contact, function (err) {
                        db.close();
                        if (!err) {
                            callback(1);
                        }
                        else {
                            callback(-1, err)
                        }
                    });
                }
            });
        }
        else {
            console.log("ca va mal a la shop");
            callback(-1, err);
        }
    });
}
database.prototype.delete = function(id,callback){
    mongo.connect('dbUrl', function(err,coll){
        if(!err){
            db.collection('contacts', function(err,coll) {
                coll.findAndRemove({_id: ObjectID(id)},
                    function (err, doc) {
                        db.close();
                        if (doc) {
                            callback(1);
                        }
                        else {
                            callback(-1, err);
                        }
                    });
                });
            }
        });
}
