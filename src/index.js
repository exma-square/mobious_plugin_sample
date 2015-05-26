require('babel/register');

import Models from './models';
import Routes from './Routes';

export default class Plugin {

  constructor(sequelize, router) {

    this.db = (new Models(sequelize)).getDb();

    (new Routes(router)).setupRoute();

  }

}
