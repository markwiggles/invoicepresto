import Ember from 'ember';

import ResourceMixin from './resource';

export default Ember.Mixin.create(ResourceMixin, {

    modelName: function() {

        var resourcePaths = ['billers', 'debtors', 'items', 'bank-details', 'taxes', 'freights', 'invoice-numbers'];
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

    editIntLink: function() {
        return this.get('resource') + '.edit-int';
    }.property(),

    editStrLink: function() {
        return this.get('resource') + '.edit-str';
    }.property(),
    
});
