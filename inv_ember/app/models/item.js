import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    price: DS.attr(),
    taxcode: DS.attr('number'),
    selected: DS.attr('boolean', {
        defaultValue: false
    })
});
