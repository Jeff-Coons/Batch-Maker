/* ======================================

Routes:

{x}  Login                     - Batchmaker.com/login
{x}  Logout                    - Batchmaker.com/logout
{x}  Signup                    - Batchmaker.com/signup
{x}  Home screen               - Batchmaker.com/home
    {x} create new recipe      - Batchmaker.com/recipes/new
    {x} edit recipe            - Batchmaker.com/recipes/edit
{x}  My Recipes                - Batchmaker.com/recipes/:username
{x}  Public Recipes            - Batchmaker.com/recipes/public
{x}  Popular Recipes           - Batchmaker.com/recipes/popular
{x}  My Favorite Recipes       - Batchmaker.com/recipes/favorites
{x}  My Pantry                 - Batchmaker.com/mypantry

====================================== */

BatchMaker.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('signup');
  }
});

BatchMaker.Router.map(function () {
  this.route('index', {path: '/'});
  this.route('home', {path: '/home'});
  this.route('signup');
  this.route('login');
  this.route('logout');

  this.resource('recipes', function () {
    this.route('new');
    this.route('edit');
    this.route('myrecipes', {path: '/:username'});
    this.route('public');
    this.route('popular');
    this.route('favorites');
  });

  this.route('pantry');
});
