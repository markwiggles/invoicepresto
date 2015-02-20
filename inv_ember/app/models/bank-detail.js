import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    accountNumber: DS.attr(),
    selected: DS.attr('boolean', {
        defaultValue: false
    })
});
