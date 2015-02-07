import DS from 'ember-data';

var biller = DS.Model.extend({

    name: DS.attr('string', {
        defaultValue: 'Mark'
    }),
    email: DS.attr('string'),
    phone: DS.attr('string')

});


biller.reopenClass({

    FIXTURES: [{
        id: 1,
        name: 'Mark',
        email: 'markwigg@live.com',
        phone: '0433 044170'
    }, {
        id: 2,
        name: 'Fred',
        email: 'freddie@live.com',
        phone: '0499 99999'
    }]
});


export default biller;
