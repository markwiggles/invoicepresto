import DS from 'ember-data';

export default DS.Model.extend({
    nextnumInt: DS.attr(),
    nextnumStr: DS.attr(),
    selected: DS.attr('boolean', {
        defaultValue: false
    })
});
