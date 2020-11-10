import { BaseContext } from 'koa';

export class ControllerModel {
  private static async restMethods(method: string, ctx: BaseContext): Promise<void> {
    console.log(method, ctx);
    ctx.status = 404;
    ctx.body = `${method.toUpperCase()}: Oops not existing`;
  }

  public get = async (ctx: BaseContext): Promise<void> => ControllerModel.restMethods('get', ctx);
  public post = async (ctx: BaseContext): Promise<void> => ControllerModel.restMethods('post', ctx);
  public put = async (ctx: BaseContext): Promise<void> => ControllerModel.restMethods('put', ctx);
  public del = async (ctx: BaseContext): Promise<void> => ControllerModel.restMethods('del', ctx);
  public all = async (ctx: BaseContext): Promise<void> => ControllerModel.restMethods('all', ctx);
}
