import Ember from 'ember';

export default Ember.Mixin.create({

	needs: ['application'],

    resource: function() {
        return this.get('controllers.application.currentRouteName').split('.')[0];
    }.property(),

    title: function() {       
        return this.get('resource').charAt(0).toUpperCase() + this.get('resource').slice(1);
    }.property()


});
