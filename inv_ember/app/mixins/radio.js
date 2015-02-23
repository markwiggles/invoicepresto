import Ember from 'ember';

export default Ember.Mixin.create({

    //On load, set the radio button with the selection from the model
    selectedNumber: function() {
        // loop through the model and find the selected id
        var selected;
        var self = this;
        this.get('model').forEach(function(item) {
            if (item.get('selected') === true) {
                selected = item.get('id');
            }
        });

        return selected;

    }.property(),

    //On change, get the value of the selection and write to model
    getRadio: function() {
        var id = this.get('selectedNumber');
        var currentModel = this.get('resource').path;

        // set all selected as false
        // this.get('model').forEach(function(item) {
        //     item.set('selected', false);
        //     item.save();
        // });
        // set the selected item and persist it
        this.store.find(this.get('modelName'), id).then(function(item) {
            item.set('selected', true);
            item.save();
        });

    }.observes('selectedNumber')

});
