import Ember from 'ember';

// import biller from '../../models/biller.js'

export default Ember.Route.extend({
	
	model: function() {
		return this.get('store').createRecord('biller');
	}
});
