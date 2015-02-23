import Ember from 'ember';

import EditingMixin from '../../mixins/editing';

export default Ember.Controller.extend(EditingMixin, {

    submitText: 'Save Changes',

    formElements: ['form-elements/name', 'form-elements/account_number']
});
