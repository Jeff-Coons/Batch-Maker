window.BatchMaker = Ember.Application.create({
  LOG_TRANSITIONS: true
});

BatchMaker.ref = new Firebase('https://makerofbatches.firebaseio.com/');

BatchMaker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: BatchMaker.ref
});

BatchMaker.initializer({
	name: 'firebase-session',

	initialize: function(container, application){
		application.deferReadiness();
		var token = localStorage.getItem('userAuth');
		if (token) {
			var session = container.lookup('controller:application');
			session.authWithToken(token).then(function(){
				application.advanceReadiness();
				});
		} else {application.advanceReadiness();}
	}
});

// Ember.Handlebars.helper('date-format', function(date) {
//   return moment(date).fromNow();
// });
