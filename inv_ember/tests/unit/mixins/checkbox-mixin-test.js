import Ember from 'ember';
import CheckboxMixinMixin from 'inv-ember/mixins/checkbox-mixin';

module('CheckboxMixinMixin');

// Replace this with your real tests.
test('it works', function() {
  var CheckboxMixinObject = Ember.Object.extend(CheckboxMixinMixin);
  var subject = CheckboxMixinObject.create();
  ok(subject);
});
