import Ember from 'ember';

export default Ember.Handlebars.registerHelper('model-type',

    function modelType(modelType, modelName, options) {

        // check true if modelName is Billers,Debtors,Items
        if (['Billers', 'Debtors'].indexOf(modelName) > -1) {
            return options.fn(this);
            //check true if modelName is Billers,Debtors
        } else if (['Items'].indexOf(modelName) > -1) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }

    });
