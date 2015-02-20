import Ember from 'ember';

export default Ember.Controller.extend({

    pageTitle: 'Debtors',
    pageRoute: 'debtors.index',
    submitText: 'Add New',


    actions: {
        submit: function() {
            var item = this.get('model');
            item.save();
            this.transitionToRoute(this.pageRoute);
        }
    }
});
