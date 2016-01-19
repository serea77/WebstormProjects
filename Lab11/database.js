/**
 * Created by Sebastien on 2016-01-19.
 */

exports.get ('/users', function(request, response){
    response.setHeader('Content-Type', 'application/json');
    db.users.find({}, {_id: 0}).toArray(function(error,array){
        response.status(200).send(array);
    });
});
