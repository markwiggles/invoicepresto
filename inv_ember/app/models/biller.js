import Ember from 'ember';                                                                                                                                                                    import DS from 'ember-data';

import EmberValidations from 'ember-validations';

var biller = DS.Model.extend(EmberValidations.Mixin, {

    name: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    selected: DS.attr('boolean', {dafaultValue: false}),

    isntValid: Ember.computed.not('isValid')
});

// VALIDATIONS

biller.reopen({
    validations: {
        name: {
            presence: true,
            length: {
                minimum: 3
            }
        },
        email: {
            presence: true
        }
    }
});

export default biller;
