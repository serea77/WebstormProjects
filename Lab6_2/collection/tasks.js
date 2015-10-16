
/**
 * Created by Sebastien on 2015-10-14.
 */
$(function() {
    TasksCollection = Backbone.Collection.extend({
        model: TaskModel,
        parse: function(response){
            return response.tasks;
        }
    })

    }
)

