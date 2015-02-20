import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    percentage: DS.attr(),
    selected: DS.attr('boolean', {
        defaultValue: false
    })
});
