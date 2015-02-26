import Ember from 'ember';

export default Ember.Mixin.create({


    needs: ['taxes/index'],

    taxes: function() {

        var taxes = this.get('controllers.taxes').get('model');

        return this.get('controllers.taxes');

    }.property(),


    options: [],

    updateOptions: function() {

        // FIX: taxcode select options populating and saving

        var self = this;
        var optionsArray = [];

        // this.get('taxes').then(function(taxItems) {
        //     taxItems.forEach(function(item) {

        //         console.log(item);

        //         optionsArray.push({
        //             id: item.get('id'),
        //             labelName: item.get('name') + ': ' + item.get('percentage') + '% - ' + item.get('description')
        //         });
        //     });
        //     self.set('options', optionsArray);
        // });

    }.on('init')
});
