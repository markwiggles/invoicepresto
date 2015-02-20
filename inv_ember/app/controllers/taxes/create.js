import Ember from 'ember';

import EditingMixin from '../../mixins/editing';

export default Ember.Controller.extend(EditingMixin, {

    submitText: 'Add New',

    formElements: ['name', 'description', 'percentage']

});