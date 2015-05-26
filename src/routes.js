
import UserController from './controllers/user';

export default class Routes {

    constructor (router) {
      this.router = router;
    }

    setupRoute() {

      this.router.get('/rest/user/:id', UserController.get);
      this.router.get('/rest/user/', UserController.index);
      this.router.post('/rest/user/', UserController.create);
      this.router.delete('/rest/user/:id', UserController.delete);

    }
}
