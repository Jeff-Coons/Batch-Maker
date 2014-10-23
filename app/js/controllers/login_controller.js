BatchMaker.LoginController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    login: function(){
      var self = this;

      ref.authWithPassword({
        email: "",
        password: ""
      }, function(error, authData) {
        if (error === null) {
          console.log("User ID:" + authData_uid + ", Provider: " + authData.provider);
        } else {
          console.log("Error authenticating user:", error);
        }
      });
    }
  }
});
