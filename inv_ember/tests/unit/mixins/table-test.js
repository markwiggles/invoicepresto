import Ember from 'ember';
import TableMixin from 'inv-ember/mixins/table';

module('TableMixin');

// Replace this with your real tests.
test('it works', function() {
  var TableObject = Ember.Object.extend(TableMixin);
  var subject = TableObject.create();
  ok(subject);
});
