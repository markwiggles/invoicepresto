import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {

    	console.log(this.routeName);

        return this.store.find('biller');
    }
});
