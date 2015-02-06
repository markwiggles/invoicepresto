# Invoice Presto

This project uses Ember for the front-end and Rails for the back-end, so these notes are split into these two areas.  The Ember notes include those supplied by the Ember-cli team in the standard template build.

<hr>

# inv-ember

<h3>Bower Configuration</h3>

The Bower configuration file, bower.json, is located at the root of your Ember CLI project, and lists the dependencies for your project. Changes to your dependencies should be managed through this file, rather than manually installing packages individually.

Executing ember install:bower will install all of the dependencies listed in bower.json in one step.

Ember CLI is configured to have git ignore your bower_components directory by default. Using the Bower configuration file allows collaborators to fork your repo and get their dependencies installed locally by executing ember install:bower themselves.

Ember CLI watches bower.json for changes. Thus it reloads your app if you install new dependencies via ember install:bower <dependencies>.

<hr>

<h3>Ember Addons used in this Project</h3> 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

