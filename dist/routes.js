Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersUser = require('./controllers/user');

var _controllersUser2 = _interopRequireDefault(_controllersUser);

var Routes = (function () {
  function Routes(router) {
    _classCallCheck(this, Routes);

    this.router = router;
  }

  _createClass(Routes, [{
    key: 'setupRoute',
    value: function setupRoute() {

      this.router.get('/rest/user/:id', _controllersUser2['default'].get);
      this.router.get('/rest/user/', _controllersUser2['default'].index);
      this.router.post('/rest/user/', _controllersUser2['default'].create);
      this.router['delete']('/rest/user/:id', _controllersUser2['default']['delete']);
    }
  }]);

  return Routes;
})();

exports['default'] = Routes;
module.exports = exports['default'];