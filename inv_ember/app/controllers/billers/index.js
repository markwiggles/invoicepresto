import Ember from 'ember';

export default Ember.Controller.extend({

    //set the biller radio button with the selection from the model
    selectedNumber: function() {
        // loop through the model and find the selected id
        var selected;
        this.get('model').forEach(function(item) {
            if (item.get('selected') === true) {
                selected = item.get('id');
            }
        });
        return selected;
    }.property(),

    // get the value of the selection on change and write to model
    getRadio: function() {
        var billerId = this.get('selectedNumber');
        // set all selected as false
        this.get('model').forEach(function(item) {
            item.set('selected', false);
            item.save();
        });
        // get the selected biller and set selected as true
        this.store.find('biller', billerId).then(function(biller) {
            biller.set('selected', true);
            biller.save();
        });
    }.observes('selectedNumber')
    // ,

    // persisted: function() {
    //     return this.get('biller').filter(function(biller) {
    //         if (!biller.get('isNew')) {
    //             console.log(biller.get('name'));
    //             return true;
    //         }
    //     });
    // }.property('biller.@each.isNew', 'biller')
});
