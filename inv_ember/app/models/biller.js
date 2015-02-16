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

// billers: {}
// biller: {}

//TEST DATA

// biller.reopenClass({

//     FIXTURES: [{
//         id: 1,
//         name: 'Mark',
//         email: 'markwigg@live.com',
//         phone: '0433 044170'
//     }, {
//         id: 2,
//         name: 'Fred',
//         email: 'freddie@live.com',
//         phone: '0499 99999'
//     }]
// });



export default biller;
