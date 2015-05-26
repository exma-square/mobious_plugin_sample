Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

require('babel/register');

var Plugin = function Plugin(sequelize, router) {
  _classCallCheck(this, Plugin);

  this.db = new _models2['default'](sequelize).getDb();

  new _Routes2['default'](router).setupRoute();
};

exports['default'] = Plugin;
module.exports = exports['default'];