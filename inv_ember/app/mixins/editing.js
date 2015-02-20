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
                console.log('submiting');
                controller.transitionToRoute(indexPath);
            });
        },

        delete: function() {
            var indexPath = this.get('resource');
            var controller = this;
            var item = controller.get('model');
            item.destroyRecord().then(function() {
                console.log('deleting ' + indexPath);
                controller.transitionToRoute(indexPath);
            });
        }
    } //end actions

});
