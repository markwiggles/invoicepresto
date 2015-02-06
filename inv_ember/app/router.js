import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('billers');
    this.resource('debtors');
    this.resource('items');
    this.resource('tax');
    this.resource('freight');
    this.resource('bank-details');
});

export default Router;
