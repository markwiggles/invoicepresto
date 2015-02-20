import Ember from 'ember';

export default Ember.View.extend({

	templateName: 'shared-templates/input-element',

	placeholder: 'Choose a tax code',

	property: "taxcode"

});
