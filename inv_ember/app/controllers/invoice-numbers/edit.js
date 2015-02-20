import Ember from 'ember';

import ResourceMixin from '../../mixins/resource';

export default Ember.Controller.extend(ResourceMixin,{

	submitText: 'Save Changes',

	modelName: 'invoice-number',

	formElements: ['nextnum-int', 'nextnum-str']
});

