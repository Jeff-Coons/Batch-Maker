BatchMaker.LoginController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    login: function(){
      var self = this;
      var credentials = this.getProperties('email', 'password');
      ref.authWithPassword(credentials, function(error, authData){
        if (error === null) {
          self.get('controllers.application').authenticate(credentials);
          setTimeout(transition, 2000);
        } else {
          console.log("Error authenticating user:", error);
          $('#login-fail').addClass('create-fail');
        }
      });

      function transition () {
        self.transitionToRoute('home');
      }
    }
  }
});
