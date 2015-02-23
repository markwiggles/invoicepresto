import Ember from 'ember';

import ResourceMixin from './resource';

export default Ember.Mixin.create(ResourceMixin, {

    isEditing: true,

    actions: {

        submit: function() {

            var indexPath = this.get('resource');
            var controller = this;
            var item = controller.get('model');
            item.save().then(function() {
                controller.transitionToRoute(indexPath);
            });
        },

        delete: function() {
            var indexPath = this.get('resource');
            var controller = this;
            var item = controller.get('model');

            if (confirm('ARE YOU SURE?' + ' - Deleting: ' + item.get('name'))) {
                item.destroyRecord().then(function() {
                    controller.transitionToRoute(indexPath);
                });
            } else {
                controller.transitionToRoute(indexPath);
            }


        }
    } //end actions

});
