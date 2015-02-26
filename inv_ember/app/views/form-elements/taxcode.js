import Ember from 'ember';

export default Ember.View.extend({


    //FIX: taxcode select options populating and saving

    property: 'taxcode',

    templateName: 'shared-templates/select-element',

    prompt: 'Choose a tax code',

    optionValuePath: "content.id",

    optionLabelPath: "content.labelName",

    selectedValue: 2,

    content: function() {

        return [{
            id: 1,
            labelName: 'GST',
        }, {
            id: 2,
            labelName: 'Duty'
        }];

        //return this.get('taxes');

    }.property()




});
