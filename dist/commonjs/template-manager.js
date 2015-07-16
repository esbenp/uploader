'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _logging = require('./logging');

var TemplateManager = (function () {
  function TemplateManager(engine, loader) {
    _classCallCheck(this, TemplateManager);

    this._engine = engine;
    this._loader = loader;
  }

  TemplateManager.prototype.load = function load(pathOrMarkup) {
    return this._loader.load(pathOrMarkup);
  };

  TemplateManager.prototype.appendMarkupToContainer = function appendMarkupToContainer(markup, container) {
    _jquery2['default'](container).html(markup);

    if (markup === '' || container.children.length === 0) {
      return _logging.err('The loaded markup was either empty or non valid.', markup);
    }

    return container;
  };

  TemplateManager.prototype.render = function render(node) {
    var viewmodel = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return this._engine.render(node, viewmodel);
  };

  return TemplateManager;
})();

exports.TemplateManager = TemplateManager;