import Ember from 'ember';

import TableMixin from '../../mixins/table';

import RadioMixin from '../../mixins/radio';

export default Ember.Controller.extend(TableMixin, RadioMixin, {

	table: 'table-04'
});