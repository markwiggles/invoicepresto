import Ember from 'ember';

export default Ember.Controller.extend({

		actions: {
		submit: function() {
			var biller = this.get('model');
			biller.save();
			this.transitionToRoute('billers');
		}
	}

});
