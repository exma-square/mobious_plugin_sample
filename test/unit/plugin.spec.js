import Plugin  from '../../src';
import {test} from '../../src/config/config.json';
import koa from 'koa';
import Router from 'koa-router';
import Sequelize from 'sequelize';
import http from 'http';
import request from 'supertest';

describe('plugin runner', () => {

  it('inital plugin', (done) => {
    const app = koa();
    var router = new Router();

    const sequelize = new Sequelize(test.database, test.username, test.password, test);

    var plugin = new Plugin(sequelize, router);

    plugin.db.should.be.Object;

    global.models = plugin.db;

    global.models.sequelize.sync({force: true}).then(() => {

      app
        .use(router.routes())
        .use(router.allowedMethods());

      var server = http.createServer(app.callback());

      request(server)
      .get('/rest/user')
      .end((err, res) => {

        res.body.users.should.be.Array;
        done();

      });

    });

  });

});
