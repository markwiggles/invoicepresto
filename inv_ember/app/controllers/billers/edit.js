import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        submit: function() {
        	var controller = this;
            var biller = controller.get('model');
            biller.save().then(function() {
            	controller.transitionToRoute('billers');
            });            
        },

        delete: function() {
            var controller = this;
            var biller = controller.get('model');
            biller.destroyRecord().then(function() {
            	controller.transitionToRoute('billers');
            });
        }
    } //end actions

});
