window.BatchMaker = Ember.Application.create({
  LOG_TRANSITIONS: true
});

var ref = new Firebase("https://amber-torch-3509.firebaseio.com/");

BatchMaker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: ref
});
