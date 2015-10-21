"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/trix-editor', ['exports', 'ember-trix-editor/components/trix-editor'], function (exports, trix_editor) {

	'use strict';



	exports['default'] = trix_editor['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    events: null,

    _initializeEvents: Ember['default'].on('init', function () {
      this.set('events', Ember['default'].A());
    }),

    actions: {
      handleTrixAction: function handleTrixAction(jqEvent) {
        this.get('events').unshiftObject(Ember['default'].Object.create({
          type: jqEvent.type
        }));
      }
    }
  });

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-trix-editor/tests/modules/ember-trix-editor/components/trix-editor.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-trix-editor/components');
  QUnit.test('modules/ember-trix-editor/components/trix-editor.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-trix-editor/components/trix-editor.js should pass jshint.');
  });

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 4
            },
            "end": {
              "line": 29,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","event");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","event.type",["loc",[null,[28,24],[28,38]]]]
        ],
        locals: ["event"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 99,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1,"class","title");
        var el2 = dom.createTextNode("ember-trix-editor");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","description");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","https://github.com/lynnetye/ember-trix-editor");
        var el3 = dom.createTextNode("Ember Trix Editor");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  is an Ember addon that wraps");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Basecamp's\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","https://github.com/basecamp/trix");
        var el3 = dom.createTextNode("Trix editor");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" in an Ember\n  component.\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","install-instructions");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("$");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ember install ember-trix-editor ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","demo-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","events");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","demo-code");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","demo-code__label");
        var el3 = dom.createTextNode("template");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"id","gist27306614");
        dom.setAttribute(el2,"class","gist");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","gist-file");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","gist-data");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","js-gist-file-update-container js-task-list-container file-box");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"id","file-asdf-hbs");
        dom.setAttribute(el6,"class","file");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","blob-wrapper data type-handlebars");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("table");
        dom.setAttribute(el8,"class","highlight tab-size js-file-line-container");
        dom.setAttribute(el8,"data-tab-size","8");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("tbody");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L1");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","1");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC1");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-c1");
        var el13 = dom.createTextNode("{{");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-v");
        var el13 = dom.createTextNode("trix-editor");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(" class=");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("trix-editor-wrapper");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L2");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","2");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC2");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              editorClass=");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("trix-editor");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L3");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","3");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC3");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-attachment-add=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L4");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","4");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC4");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-attachment-remove=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L5");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","5");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC5");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-blur=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L6");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","6");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC6");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-change=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L7");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","7");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC7");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-file-accept=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L8");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","8");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC8");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-focus=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L9");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","9");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC9");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-initialize=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-L10");
        dom.setAttribute(el11,"class","blob-num js-line-number");
        dom.setAttribute(el11,"data-line-number","10");
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("td");
        dom.setAttribute(el11,"id","file-asdf-hbs-LC10");
        dom.setAttribute(el11,"class","blob-code blob-code-inner js-file-line");
        var el12 = dom.createTextNode("              trix-selection-change=(action ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-s");
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode("handleTrixAction");
        dom.appendChild(el12, el13);
        var el13 = dom.createElement("span");
        dom.setAttribute(el13,"class","pl-pds");
        var el14 = dom.createTextNode("\"");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(")");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("span");
        dom.setAttribute(el12,"class","pl-c1");
        var el13 = dom.createTextNode("}}");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    Created by ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://twitter.com/channingallen");
        dom.setAttribute(el3,"target","_blank");
        var el4 = dom.createTextNode("Channing Allen");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    and ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","https://twitter.com/lynnetye");
        dom.setAttribute(el3,"target","_blank");
        var el4 = dom.createTextNode("Lynne Tye");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [6]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        morphs[1] = dom.createMorphAt(element0,1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        return morphs;
      },
      statements: [
        ["content","testProperty",["loc",[null,[11,49],[11,65]]]],
        ["inline","trix-editor",[],["class","trix-editor-wrapper","editorClass","trix-editor","trix-attachment-add",["subexpr","action",["handleTrixAction"],[],["loc",[null,[17,36],[17,63]]]],"trix-attachment-remove",["subexpr","action",["handleTrixAction"],[],["loc",[null,[18,39],[18,66]]]],"trix-blur",["subexpr","action",["handleTrixAction"],[],["loc",[null,[19,26],[19,53]]]],"trix-change",["subexpr","action",["handleTrixAction"],[],["loc",[null,[20,28],[20,55]]]],"trix-file-accept",["subexpr","action",["handleTrixAction"],[],["loc",[null,[21,33],[21,60]]]],"trix-focus",["subexpr","action",["handleTrixAction"],[],["loc",[null,[22,27],[22,54]]]],"trix-initialize",["subexpr","action",["handleTrixAction"],[],["loc",[null,[23,32],[23,59]]]],"trix-selection-change",["subexpr","action",["handleTrixAction"],[],["loc",[null,[24,38],[24,65]]]]],["loc",[null,[15,2],[24,67]]]],
        ["block","each",[["get","events",["loc",[null,[27,12],[27,18]]]]],[],0,null,["loc",[null,[27,4],[29,13]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/trix-editor-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('trix-editor', 'Integration | Component | trix editor', {
    integration: true
  });

  function clearAndRender(template) {
    $('#ember-testing').html('');
    this.render(template);
  }

  ember_qunit.test('renders', function (assert) {
    assert.expect(5);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 0
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })()));
    var $trixEditor = this.$().find('> div');
    assert.strictEqual($trixEditor.length, 0);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('> div');
    assert.strictEqual($trixEditor.length, 1);
    assert.strictEqual($trixEditor.find('> input').length, 1);
    assert.strictEqual($trixEditor.find('> trix-toolbar').length, 1);
    assert.strictEqual($trixEditor.find('> trix-editor').length, 1);
  });

  ember_qunit.test('sets correct HTML attributes to inputId attribute', function (assert) {
    assert.expect(2);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 34
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['inputId', 'attrs-id'], ['loc', [null, [1, 0], [1, 34]]]]],
        locals: [],
        templates: []
      };
    })()));
    var inputIdAttribute = this.$().find('div > input').attr('id');
    var customInputId = 'attrs-id';
    assert.strictEqual(inputIdAttribute, customInputId);
    var trixEditorInputAttribute = this.$().find('div > trix-editor').attr('input');
    assert.strictEqual(trixEditorInputAttribute, customInputId);
  });

  ember_qunit.test('is focused based on autofocus attribute', function (assert) {
    assert.expect(7);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    var $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.is(':focus'), 'editor not focused by default');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 31
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', false], ['loc', [null, [1, 0], [1, 31]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is false');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 30
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', true], ['loc', [null, [1, 0], [1, 30]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is true');

    // Demonstrate that the component looks at the truthiness of the autofocus attribute.

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 27
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', 0], ['loc', [null, [1, 0], [1, 27]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is int 0');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 27
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', 1], ['loc', [null, [1, 0], [1, 27]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is int 1');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 28
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', ''], ['loc', [null, [1, 0], [1, 28]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.is(':focus'), 'editor not focused when autofocus attr is a falsey string');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['autofocus', 'true'], ['loc', [null, [1, 0], [1, 32]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.ok($trixEditor.is(':focus'), 'editor focused when autofocus attr is a truthy string');
  });

  ember_qunit.test('sets trix-editor\'s placeholder attribute to placeholder attr', function (assert) {
    assert.expect(2);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    var $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.attr('placeholder'), 'placeholder empty if not set');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 46
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['placeholder', 'test placeholder'], ['loc', [null, [1, 0], [1, 46]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.strictEqual($trixEditor.attr('placeholder'), 'test placeholder', 'placeholder attribute determines placeholder text');
  });

  ember_qunit.test('sets trix-editor\'s class attribute to editorClass attr', function (assert) {
    assert.expect(3);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    var $trixEditor = this.$().find('trix-editor');
    assert.notOk($trixEditor.attr('class'), 'class is empty by default');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 33
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['editorClass', 'one'], ['loc', [null, [1, 0], [1, 33]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.ok($trixEditor.hasClass('one'), 'accepts class name from editorClass');

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 37
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'trix-editor', [], ['editorClass', 'one two'], ['loc', [null, [1, 0], [1, 37]]]]],
        locals: [],
        templates: []
      };
    })()));
    $trixEditor = this.$().find('trix-editor');
    assert.ok($trixEditor.hasClass('one two'), 'accepts multiple class names from editorClass');
  });

  ember_qunit.test('sets trix-editor\'s event listeners on insert', function (assert) {
    assert.expect(8);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    var trixEditorEl = this.$().find('trix-editor')[0];
    var eventNames = Object.keys(jQuery._data(trixEditorEl, 'events'));
    eventNames.forEach(function (eventName) {
      assert.notEqual(eventNames.indexOf(eventName), -1, eventName + ' event is bound on insert');
    });
  });

  ember_qunit.test('removes trix-editor\'s event listeners on destruction', function (assert) {
    assert.expect(2);

    clearAndRender.call(this, Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'trix-editor', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));
    var $trixEditor = this.$().find('trix-editor');
    var trixEditorEl = $trixEditor[0];
    var eventsObject = jQuery._data(trixEditorEl, 'events');
    assert.ok(eventsObject, 'events are bound initially on insert');

    $('#ember-testing').html('');
    eventsObject = jQuery._data(trixEditorEl, 'events');
    assert.notOk(eventsObject, 'events are removed on destruction');
  });

});
define('dummy/tests/integration/components/trix-editor-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/trix-editor-test.js should pass jshint', function(assert) { 
    assert.ok(false, 'integration/components/trix-editor-test.js should pass jshint.\nintegration/components/trix-editor-test.js: line 108, col 34, \'jQuery\' is not defined.\nintegration/components/trix-editor-test.js: line 122, col 22, \'jQuery\' is not defined.\nintegration/components/trix-editor-test.js: line 126, col 18, \'jQuery\' is not defined.\n\n3 errors'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-trix-editor","version":"0.2.0+a53c939f"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map