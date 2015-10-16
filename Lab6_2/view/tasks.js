/**
 * Created by Sebastien on 2015-10-14.
 */
$(function(){
        TaskView = Backbone.View.extend({
            template: _.template($("#task-tpl").html()),
            el: "#tasks-list",
            events:{
                "click #btn-add-task": "buttonAddHandler",
                "click #btn-del-task": "buttonDelHandler",
                "click #btn-save-task":"buttonSaveHandler"
            },
            initialize: function(){
                console.log("je suis la");
                var self = this;
                this.collection.bind("sync add remove", function(){
                    self.render();
                });
            },
            render: function () {
                console.log(this.collection.toJSON());
                this.$el.html(this.template({
                    tasks: this.collection.toJSON()
                }));

            },
            buttonAddHandler: function(event){
                this.hideError();
                var isValid =  this.collection.create({
                    id: Math.floor((Math.random()*1000000)+1),
                    task: $("#task-editor").val()
                },{
                    type: "POST",
                    validate: true
                })
                if(!isValid){
                    this.showError();
                }

            },
            buttonDelHandler: function(event){
                console.log("destroy man!!");
                var idT = $(event.target).data("id");
                var model = this.collection.get(idT);
                console.log(model);

                model.destroy();
                console.log(idT);

               // var url = this.collection.url;
                //this.collection.url=url+"/"+idT;

                this.collection.remove(idT);
                //this.collection.url=url;

            },
            buttonSaveHandler: function(event){
                var taskID = $(event.target).data("id");
                var model = this.collection.get(taskID);

                var url = this.collection.url;
                this.collection.url=url+"/"+taskID;
                model.save({
                    "task": $(event.target).parent().find(".task-content").val()
                },{validate: true});
                this.collection.url=url;
            },

            showError: function(){
                $("#error-handler").slideDown("fast");
            },
            hideError: function(){
                $("#error-handler").slideUp("fast");
            }


        })
    }
)

