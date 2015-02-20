import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return this.get('store').createRecord('biller');
    },
    // Rollback changes when route exits without 
    resetController: function(controller) {
        var item = controller.get('model');
        if (item.get('isDirty')) {
            item.rollback();
        }
    }
});
