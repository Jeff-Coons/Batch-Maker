BatchMaker.SignupController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('username', 'email', 'password');
      ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function(authData){
            var user = self.store.createRecord('user', {
              id: authData.uid,
              username: credentials.username,
              email: credentials.email
            });
            user.save();
          });
          $('#success').addClass('create-success');
          setTimeout(transition, 3000);
        } else {
          $('#fail').addClass('create-fail');
        }

        function transition () {
          self.transitionToRoute('login');
        }
      });
    },

    goToLogin: function () {
      this.transitionToRoute('login');
    }
  }
});
