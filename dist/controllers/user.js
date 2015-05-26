

exports.index = regeneratorRuntime.mark(function callee$0$0() {
  var users;
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return global.models.User.findAll();

      case 2:
        users = context$1$0.sent;

        this.body = { users: users };

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
});

exports.get = regeneratorRuntime.mark(function callee$0$0() {
  var userId, user;
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        userId = this.params.id;
        context$1$0.next = 3;
        return global.models.User.findOne(userId);

      case 3:
        user = context$1$0.sent;

        this.body = { user: user };

      case 5:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
});

exports.create = regeneratorRuntime.mark(function callee$0$0() {
  var newUser, result, user;
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        newUser = this.request.body;
        result = null;
        context$1$0.prev = 2;
        context$1$0.next = 5;
        return global.models.User.create(newUser);

      case 5:
        result = context$1$0.sent;
        context$1$0.next = 11;
        break;

      case 8:
        context$1$0.prev = 8;
        context$1$0.t0 = context$1$0['catch'](2);

        console.error('create user error', context$1$0.t0);

      case 11:
        user = result;

        this.body = { user: user };

      case 13:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this, [[2, 8]]);
});

exports['delete'] = regeneratorRuntime.mark(function callee$0$0() {
  var userId, result, user;
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        userId = this.params.id;
        result = null;
        context$1$0.prev = 2;
        context$1$0.next = 5;
        return global.models.User.findOne(userId);

      case 5:
        user = context$1$0.sent;

        result = user.destroy();
        context$1$0.next = 12;
        break;

      case 9:
        context$1$0.prev = 9;
        context$1$0.t0 = context$1$0['catch'](2);

        console.error('create user error', context$1$0.t0);

      case 12:
        this.body = { result: result };

      case 13:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this, [[2, 9]]);
});