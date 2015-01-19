BatchMaker.RecipesNewController = Ember.Controller.extend({
  needs: 'application',
  timeUnit: ["mins", "hrs"],
  recipeType: ["breakfast", "lunch", "dinner", "dessert"],
  selectedRecipe: null,
  tempUnit: ["Farenheit", "Celcius"],
  selectedTempUnit: "Farenheit",
  author: Ember.computed.alias('controllers.application.currentUser'),
  ingredients: [],
  steps: [],
  isPublic: false,

  actions: {

    saveRecipe: function() {
      var self=this;
      var workflow = BatchMaker.NewRecipeWorkflow.create({
        attributes: {
          name: this.name,
          isPublic: this.get('isPublic'),
          recipeType: this.get('selectedRecipeType'),
          prepTime: this.get('prepTime'),
          prepTimeUnit: this.get('selectedPrepTimeUnit'),
          cookTime: this.get('cookTime'),
          cookTimeUnit: this.get('selectedCookTimeUnit'),
          cookTemp: this.get('cookTemp'),
          cookTempUnit: this.get('selectedCookTempUnit'),
          yield: this.get('yield'),
          yieldUnit: this.get('yieldUnit'),
          notes: this.get('notes'),
          imgURL: this.get('imgURL')
        },
        ingredients: this.get('ingredients'),
        steps: this.get('steps'),
        store: this.get('store'),
        authorID: this.get('author.id')
      });
      workflow.run().then(function(id) {
        self.transitionToRoute('recipes.recipe', id);
      });
    },
    addStep: function() {
      var stepNum = this.get('steps').length + 1;
      var newStep = this.store.createRecord('step', {
        stepNum: stepNum,
      });
      this.get('steps').addObject(newStep);
    }
  }
});
