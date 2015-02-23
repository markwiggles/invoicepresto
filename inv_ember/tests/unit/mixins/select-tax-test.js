import Ember from 'ember';
import SelectTaxMixin from 'inv-ember/mixins/select-tax';

module('SelectTaxMixin');

// Replace this with your real tests.
test('it works', function() {
  var SelectTaxObject = Ember.Object.extend(SelectTaxMixin);
  var subject = SelectTaxObject.create();
  ok(subject);
});
