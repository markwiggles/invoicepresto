import Ember from 'ember';

export default Ember.View.extend({

	templateName: 'shared-templates/input-element',

	placeholder: 'Enter a description',

	property: "description"

});