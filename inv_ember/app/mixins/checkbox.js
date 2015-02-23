import Ember from 'ember';

export default Ember.Mixin.create({

    itemController: 'item',


    //On load, set the checkbox with the selection from the model
    selectedCheckboxes: function() {

        // loop through the current and find the selected id
        var selected = [];
        var self = this;


        this.get('model').forEach(function(item) {
            if (item.get('selected') === true) {
                selected = item.get('id');
            }
        });

        return selected;

    }.property(),

    //On change, get the value of the selection and write to model
    saveSelected: function() {

        console.log('selected checkbox');

        // var id = this.get('selectedNumber');
        // var currentModel = this.get('resource').path;

        // this.store.find(this.get('modelName'), id).then(function(item) {
        //     item.set('selected', true);
        //     item.save();
        // });

    }.observes()

});
