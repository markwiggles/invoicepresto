import Ember from 'ember';

export default Ember.Mixin.create({

    options: [],

    updateOptions: function() {

        // TODO: select options to show on load

        var self = this;
        var optionsArray = [];

        this.store.find('tax').then(function(taxItems) {
            taxItems.forEach(function(item) {

                optionsArray.push({
                    id: item.get('id'),
                    labelName: item.get('name') + ': ' + item.get('percentage') + '% - ' + item.get('description')
                });
            });
            self.set('options', optionsArray);
        });

    }.on('init')
});
