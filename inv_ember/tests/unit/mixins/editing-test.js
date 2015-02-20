import Ember from 'ember';
import EditingMixin from 'inv-ember/mixins/editing';

module('EditingMixin');

// Replace this with your real tests.
test('it works', function() {
  var EditingObject = Ember.Object.extend(EditingMixin);
  var subject = EditingObject.create();
  ok(subject);
});
