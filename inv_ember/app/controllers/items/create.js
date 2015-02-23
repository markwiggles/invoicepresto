import Ember from 'ember';

import EditingMixin from '../../mixins/editing';

import SelectTaxMixin from '../../mixins/select-tax';

export default Ember.Controller.extend(EditingMixin, SelectTaxMixin, {

    submitText: 'Add New',

    formElements: ['form-elements/name', 'form-elements/description', 'form-elements/price', 'form-elements/taxcode'],


});
