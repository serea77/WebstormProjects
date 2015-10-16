/**
 * Created by Sebastien on 2015-10-14.
 */
$(function(){
    var taskCollection = new TasksCollection({});
    taskCollection.url="http://localhost:5000/tasks";

    var taskView = new TaskView({
        collection: taskCollection
    })
    taskCollection.fetch();
    console.log(taskCollection);
});
