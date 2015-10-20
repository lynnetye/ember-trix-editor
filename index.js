/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-trix-editor',

  included: function (app) {
    this._super.included(app);

    app.import(app.vendorDirectory + '/trix.js');
    app.import(app.vendorDirectory + '/trix.css');
  }
};
