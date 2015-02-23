import Ember from 'ember';

import TableMixin from '../../mixins/table';

// import CheckboxMixin from '../../mixins/checkbox';

export default Ember.ArrayController.extend(TableMixin, {

	table: 'table-05',

	itemController: 'items/line'
});
