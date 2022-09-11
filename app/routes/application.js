import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // return Ember.RSVP.hash({
        //     contracts: [{ "class": "color-firstgreen", "name": "Draft" }, { "class": "color-secondgreen", "name": "Approved" }, { "class": "color-thirdgreen", "name": "Negotiated" }, { "class": "color-fourthgreen", "name": "Signed" }, { "class": "color-fifthgreen", "name": "Active" }],
        //     statusValues: ["Approval Pending", "Negotiation Pending", "Sign Pending", "Renewal Nearing"]
        //   });
        // return $.getJSON("http://localhost:8080/LibraryManagementSystem/v1/book/issues");
        return $.ajax({
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