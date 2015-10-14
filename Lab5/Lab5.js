/**
 * Created by sebastien on 15-10-01.
 */
$(document).ready(function() {
    var baseUrl = "http://localhost:5000";
    var id = 0;

    $("#bodyLab5").load(function(){
        loadTasks();
    });

    $("#addPost").click(function(){

        id++;
        var postIt =  "{ \"task\": ";

        postIt+= "\""+ $("#inputArea").val()+"\" }";

        var request = $.ajax({

            url: baseUrl+ "/tasks/"+id,
            type: "POST",
            data: postIt,
            contentType: "application/json"
        });
        request.done(function(data){
            $("#inputArea").val("");
            loadTasks()});
        request.fail(function(jqXHR, textStatus){
            console.log("Erreur: " + jqXHR.value)});
    });


    $("#bodyLab5").load(function(){
        loadTasks();
    })
    $("#deletePost").click(function(){
        var request = $.ajax({
            url: baseUrl+ "/tasks/"+id,
            type: "DELETE",
            contentType: "application/json"
        });
        request.done(function(data){
            loadTasks()});
        request.fail(function(jqXHR, textStatus){console.log(
            "Erreur: " + jqXHR.value)});

    })
    $("#modifyPost").click(function(){
        $(".modify").css("opacity","100");


    })
    $("#modifyButton").click(function(){
        var postIt =  "{ \"task\": ";
        postIt+= "\""+ $("#updatePostIt").val()+"\" }";
        var request = $.ajax({

            url: baseUrl+ "/tasks/"+id,
            type: "PUT",
            data: postIt,
            contentType: "application/json"
        });
        request.done(function(data){
            $(".modify").css("opacity","0");
            loadTasks()});
        request.fail(function(jqXHR, textStatus){
            console.log("Erreur: " + jqXHR.value)});


    })
    $("#postItContainerContent").click(function(event){
        var test = event.toElement;
        id = test.id;
    })


    var loadTasks = function(){
        console.log("salut on load à l'os.");
        $.ajax({
            url: baseUrl + "/tasks",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){

            $("#postItContainerContent").empty();
            data.tasks.forEach(function(task){
                console.log(task.id + " : " + task.task);
                var html = generatorPostIt(task.id, task.task);
                $("#postItContainerContent").append(html);
            })

        })
    }

    var generatorPostIt = function(id, text){
        var html = "";
        html += "<div >";
        html += "<div class=\"postIT\">";
        html += "<input type=\"radio\" name=\"radioPostIt\" id=\""+id+"\">"+text
        html += "<\div>";
        html += "<\div>";
        return html;

    }




});
    /*
var Lab5 = function(){
    var baseUrl ="";

    $("#addPost").click(function(){
        console.log("allo alex");
        var postIt = $("#inputArea").val();
        var request = $.ajax({

            url: baseUrl+ "/task",
            type: "POST",
            data: JSON.stringify(postIt),
            contentType: "application/json"
        });
        request.done(function(data){console.log("Tout est OOOOOOKAYYYY"+ data)});
        request.fail(function(jqXHR, textStatus){console.log("Erreur: " + textStatus)});
    })
    $("#bodyLab5").load(function(){
        loadTasks();
    })


    var loadTasks = function(){
        $.ajax({
            url: baseUrl + "/task",
            type: GET,
            contentType: "application/json"
        }).done(function(data){
            $("#postItContainerContent").empty();
            var html = generatorPostIt(task.id, task.task);
            $("#postItContent").append(html);

        })
    }

    var generatorPostIt = function(id, text){
        var html = "";
        html += "<div >";
        html += "<div id='"+ id +"' >";
        html += "<p>" + text+"<\p>";
        html += "<\div>";
        html += "<\div>";
        return html;

    }

}

*/