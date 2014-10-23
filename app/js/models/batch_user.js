BatchMaker.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string')
  //pantry_foods: DS.hasMany('pantry_food'),
  //recipes: DS.hasMany('recipe')
});
