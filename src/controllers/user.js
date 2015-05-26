

exports.index = function*() {

  let users = yield global.models.User.findAll();

  this.body = {users};

};

exports.get = function*() {

  let userId = this.params.id;

  let user = yield global.models.User.findOne(userId);

  this.body = {user};

};

exports.create = function*() {

  let newUser = this.request.body;

  let result = null;

  try {
    result = yield global.models.User.create(newUser);
  } catch (e) {
    console.error('create user error', e);
  }

  let user = result;
  this.body = {user};

};

exports.delete = function*() {

  let userId = this.params.id;

  let result = null;

  try {
    let user = yield global.models.User.findOne(userId);

    result = user.destroy();
  } catch (e) {
    console.error('create user error', e);
  }
  this.body = {result};
};
