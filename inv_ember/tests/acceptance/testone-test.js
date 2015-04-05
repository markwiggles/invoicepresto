import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Testone', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /testone', function() {
  visit('/testone');

  andThen(function() {
    equal(currentPath(), 'testone');
  });
});
