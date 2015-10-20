/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-trix-editor',

  included: function (app) {
    this._super.included(app);

    app.import('vendor/trix.js');
    app.import('vendor/trix.css');
  }
};
