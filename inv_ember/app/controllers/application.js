import Ember from 'ember';

export default Ember.Controller.extend({

    updateCurrentPath: function() {
        this.set('currentPath', this.get('currentPath'));

        //console.log(this.get('currentPath'));

    }.observes('currentPath')
});