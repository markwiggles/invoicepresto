import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    this.resource('billers', function() {
        this.route('create');
        this.route('edit', {
            path: ':biller_id'
        });
    });

    this.resource('debtors');
    this.resource('items');
    this.resource('tax');
    this.resource('freight');
    this.resource('bank-details');
});

export default Router;
