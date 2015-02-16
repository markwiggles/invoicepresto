import Ember from 'ember';

// import biller from '../../models/biller.js'

export default Ember.Route.extend({

    model: function() {
        return this.store.createRecord('biller');
    },
    resetController: function(controller) {
        var biller = controller.get('model');
        if (biller.get('isDirty')) biller.rollback();
    }
});
