import Ember from 'ember';
import ResourceMixin from 'inv-ember/mixins/resource';

module('ResourceMixin');

// Replace this with your real tests.
test('it works', function() {
  var ResourceObject = Ember.Object.extend(ResourceMixin);
  var subject = ResourceObject.create();
  ok(subject);
});
