import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        
        track:function(){
            var u = $("#u").val();
            var p = $("#p").val();
            var value = $.getJSON("http://localhost:8080/LibraryManagementSystem/v1/login?username="+u+"&password="+p);
            this.set('Oneuser', value);
           console.log(value.responseJson);
            //console.log(this.get('Oneuser.responseJson'));
        },
    }
});
