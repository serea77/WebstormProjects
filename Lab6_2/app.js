/**
 * Created by Sebastien on 2015-10-14.
 */
$(function(){
    var taskCollection = new TasksCollection();
    taskCollection.model;


    var taskView = new TaskView({
        collection: taskCollection
    })
    taskCollection.fetch();

});
