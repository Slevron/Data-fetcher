import { BaseContext } from 'koa';
import { getRepository } from 'typeorm';
import { SteamGames } from '../entity/SteamGames';
import { SteamApi } from './../utils/steamUtils';
import { ControllerModel } from './ControllerModel';

// https://partner.steamgames.com/doc/webapi/ISteamApps
export class SteamGamesController extends ControllerModel {
  constructor() {
    super();
  }

  public get = async (ctx: BaseContext) => {
    const steamGames = await SteamApi.getListGames();
    const game = await getRepository(SteamGames)
      .save(steamGames);

    ctx.status = 200;
    ctx.body = game;
  }
}
