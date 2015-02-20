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

    this.resource("debtors", function() {
        this.route("create");
        this.route("edit", {
            path: ':id'
        });
    });

    this.resource("items", function() {
        this.route("create");
        this.route("edit", {
            path: ':id'
        });
    });

    this.resource("bank-details", function() {
        this.route("create");
        this.route("edit", {
            path: ':id'
        });
    });

    this.resource("taxes", function() {
        this.route("create");
        this.route("edit", {
            path: ':id'
        });
    });

    this.resource("freights", function() {
        this.route("create");
        this.route("edit", {
            path: ':id'
        });
    });

    this.resource("invoice-numbers", function() {
        this.route("edit");
    });
});

export default Router;
