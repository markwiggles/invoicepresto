import Ember from 'ember';

export default Ember.ObjectController.extend({

    //FIX: item checkboxes populating on load


    updateSelected: function() {

        var items = this.store.find('item');

    }.on('init'),


    selectedItem: undefined,

    watchSelected: function() {

        var self = this;
        //get the model for the selected item, change selected to true/false, and save changes
        this.store.find('item', self.get('id')).then(function(item) {
            item.set('selected', self.get('selectedItem'));
            item.save();
        });

    }.observes('selectedItem')

});
