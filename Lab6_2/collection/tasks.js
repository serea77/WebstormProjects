
/**
 * Created by Sebastien on 2015-10-14.
 */
$(function() {
    TasksCollection = Backbone.Collection.extend({
        url: "http://localhost:5000/tasks",
        model: TaskModel,
        parse: function(response){
            return response.tasks;
        }
    })

    }
)

