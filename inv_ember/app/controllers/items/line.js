import Ember from 'ember';

export default Ember.ObjectController.extend({


    selected: function() {

        var lineItems = this.get('model');

        console.log(lineItems);

        return lineItems;

    }.on('init'),

    watchSelected: function() {

        var self = this;
        //get the model for the selected item, change selected to true/false, and save changes
        this.store.find('item', self.get('id')).then(function(item) {
            item.set('selected', self.get('selected'));
            item.save();
        });

    }.observes('selected')

});
