import Ember from 'ember';

export default Ember.Route.extend({
    model:function(){
        // return $.getJSON("http://localhost:8080/LibraryManagementSystem/v1/book/");
        // return fetch("http://localhost:8080/LibraryManagementSystem/v1/book/").then(function(releases) {
        //     releases.forEach(function(release) {
        //       console.log(release.isbn);
        //     });
        //     return releases;
        // });

        $.ajax({
            url     : "http://localhost:8080/LibraryManagementSystem/v1/book/",
            method     : 'GET',
            success    : function(resultText){
                console.log(resultText);
            },
            error : function(jqXHR, exception){
            console.log('Error occured!!');
            }
            });
    }
});
