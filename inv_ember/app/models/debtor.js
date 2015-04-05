import DS from 'ember-data';

import EmberValidations from 'ember-validations';

var debtor = DS.Model.extend(EmberValidations.Mixin, {

    name: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    selected: DS.attr('boolean', {
        defaultValue: false
    })
});

// VALIDATIONS
debtor.reopen({
    validations: {
        name: {
            presence: true,
            length: {
                minimum: 3
            }
        },
        email: {
            presence: true,
            format: /.+@.+\..{2,4}/
        }
    }
});

export default debtor;
