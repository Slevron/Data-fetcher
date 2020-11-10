import Router from 'koa-router';
import { ControllerModel } from '../controllers/ControllerModel';
import { routerConfig } from './config';
import { IRouter } from './interface';

export class Routers {
  private list: Router[] = [];

  constructor() {
    routerConfig.forEach(
      (router: IRouter) => this.list.push(this.createRoute(router)),
    );
  }

  public getRoutes() {
    return this.list;
  }

  private createRoute(args: IRouter): Router {
    const router: Router = new Router({
      prefix: `/${args.prefix}`,
    });
    const controller: ControllerModel = args.controller;

    router
      .get('/', controller.get)
      .post('/', controller.post)
      .put('/:id', controller.put)
      .del('/:id', controller.del)
      .all('/:id', controller.all);

    return router;
  }
}
