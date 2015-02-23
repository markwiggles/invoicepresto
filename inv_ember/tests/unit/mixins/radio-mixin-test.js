import Ember from 'ember';
import RadioMixinMixin from 'inv-ember/mixins/radio-mixin';

module('RadioMixinMixin');

// Replace this with your real tests.
test('it works', function() {
  var RadioMixinObject = Ember.Object.extend(RadioMixinMixin);
  var subject = RadioMixinObject.create();
  ok(subject);
});
