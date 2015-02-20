import Ember from 'ember';

import ResourceMixin from './resource';

export default Ember.Mixin.create(ResourceMixin, {

    modelName: function() {

        var resourcePaths = ['billers', 'debtors', 'items', 'bank-details', 'tax', 'freight', 'invoice-number'];
        var models = ['biller', 'debtor', 'item', 'bank-detail', 'tax', 'freight', 'invoice-number'];

        //return the models-index of the current resource in the array
        return models[resourcePaths.indexOf(this.get('resource'))];

    }.property('resource'),

    createLink: function() {
        return this.get('resource') + '.create';
    }.property(),

    editLink: function() {
        return this.get('resource') + '.edit';
    }.property(),


    //set the radio button with the selection from the model
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
        var id = this.get('selectedNumber');
        var currentModel = this.get('resource').path;

        // set all selected as false
        this.get('model').forEach(function(item) {
            item.set('selected', false);
            item.save();
        });
        // set the selected item and persist it
        this.store.find(this.get('modelName'), id).then(function(item) {
            item.set('selected', true);
            item.save();
        });

    }.observes('selectedNumber')

});
