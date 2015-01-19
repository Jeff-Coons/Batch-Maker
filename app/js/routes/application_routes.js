BatchMaker.IndexRoute = Ember.Route.extend({
  // beforeModel: function(){
  //   var currentUser = this.controllerFor('application').get('currentUser');
  //   if (!currentUser) {
  //     this.transitionTo('login');
  //   }
  // },
  // setupController: function(controller, model) {
  //   var myRecipes = this.controllerFor('application')
  //     .get('currentUser.recipes');
  //
  //   myRecipes.then(function() {
  //     controller.set('myRecipes', myRecipes.slice(-4));
  //   });
  //
  //   var publicRecipes = this.store.find('publicRecipe', 'all').then(function(collection){
  //     return collection.get('recipes');
  //   });
  //   publicRecipes.then(function(recipes) {
  //     controller.set('publicRecipes', recipes.slice(-5));
  //   });
  // }
});


BatchMaker.RecipesIndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser){
      this.transitionTo('login');
    }
  },
  model: function(){
    return this.controllerFor('application').get('currentUser.recipes');
  }
});

BatchMaker.RecipesNewRoute = Ember.Route.extend({
  beforeModel: function() {
    var currentUser = this.controllerFor('application').get('currentUser');
    if (!currentUser) {
      this.transitionTo('login');
    }
  }
});

BatchMaker.LogoutRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.controllerFor('application').get('currentUser')) {
      this.controllerFor('application').set('currentUser', '');
      localStorage.removeItem('bakerAuth');
      Baker.ref.unauth();
    }
  }
});
