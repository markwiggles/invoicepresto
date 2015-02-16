import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.resource('billers', function() {
      this.route('create');
      this.route('edit', {
          path: ':id'
      });
  });

  this.route("debtors", function() {
      this.route("create");
      this.route("edit", {
          path: ':id'
      });
  });

  this.route("items", function() {
      this.route("create");
      this.route("edit", {
          path: ':id'
      });
  });

  this.route("bank-details", function() {
      this.route("create");
      this.route("edit", {
          path: ':id'
      });
  });

  this.route("tax", function() {
      this.route("create");
      this.route("edit", {
          path: ':id'
      });
  });

  this.route("freight", function() {
      this.route("create");
      this.route("edit", {
          path: ':id'
      });
  });

  this.route("invoice-number", function() {
    this.route("edit");
  });
});

export default Router;
