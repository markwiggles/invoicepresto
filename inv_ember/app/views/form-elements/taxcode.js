import Ember from 'ember';

export default Ember.View.extend({

    templateName: 'shared-templates/select-element',

    prompt: 'Choose a tax code',

    optionValuePath: "content.id",

    optionLabelPath: "content.labelName",

    content: function() {

        return this.get('controller.options');

    }.property()


});
