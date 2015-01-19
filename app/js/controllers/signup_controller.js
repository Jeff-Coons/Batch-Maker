BatchMaker.SignupController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password', 'username');
      console.log(credentials);
      BatchMaker.ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (user) {
            user.setProperties ({
              username: credentials.username,
              email: credentials.email
            });
            user.save();
          });
          console.log('cool');
          self.transitionToRoute('login');
        } else {
          console.log('wtf buttface');
        }
      });
    },

    goToLogin: function () {
      this.transitionToRoute('login');
    }
  }
});
