import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import helmet from 'koa-helmet';
import 'reflect-metadata';
// import jwt from 'koa-jwt';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getConfig } from './config';
import { RouterApp } from './routerApp';

createConnection(getConfig())
.then(
  async () => {
    const app = new Koa();
    // app.use(
    //     jwt({
    //         secret: 'shared-secret',
    //     })
    //     .unless({
    //         path: [/^\/users/],
    //     }),
    // );
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser());
    const routerApp = new RouterApp().get();
    console.log(routerApp.stack.map((i) => i.path));
    app.use(routerApp.routes());
    app.use(routerApp.allowedMethods());
    app.listen(3000);
  },
)
.catch(
  (error: string) => console.log(error),
);
