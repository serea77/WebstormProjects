/**
 * Created by Sebastien on 2015-10-14.
 */
(function(){
    TaskModel = Backbone.Model.extend({
        defaults: {
            id: "",
            task: ""
        },
        parse: function(response){
            this.id = response.id;
        },
        validate: function(attrs){
            if(!attrs.task || attrs.task === "" ){
                return "Please enter a valid task.";
            }

        }
    })
})();
