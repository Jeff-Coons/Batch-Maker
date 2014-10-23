BatchMaker.SignupController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      ref.createUser({
        email: this.get('email'),
        password: this.get('password')
      }, function(error){
        if (error === null) {
          $('#success').addClass('create-success');
          setTimeout(transition, 3000);

        } else {
          console.log("Error creating user:", error);
          $('#fail').addClass('create-fail');
        }

        function transition () {
          self.transitionToRoute('login');
        }

      });

      var usersRef = ref.child('user');
      usersRef.push({
        name: this.get('name'),
      });
    },

    goToLogin: function () {
      this.transitionToRoute('login');
    }
  }
});
