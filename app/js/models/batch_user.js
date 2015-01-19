BatchMaker.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  recipes: DS.hasMany('recipe', {async: true}),
  pantry: DS.hasMany('pantry_food', {embedded: true})
});
