import Ember from 'ember';

import ResourceMixin from '../../mixins/resource';

export default Ember.Controller.extend(ResourceMixin,{

	submitText: 'Save Changes',

	modelName: 'invoice-number',

	formElements: ['form-elements/nextnum-int', 'form-elements/nextnum-str']
});

