import { BaseContext } from 'koa';
import { getRepository } from 'typeorm';
import { SteamGames } from '../entity/SteamGames';
import { AxiosUtils } from './../utils/axiosUtils';
import { ControllerModel } from './ControllerModel';

interface ISteamGame {
  appid: string;
  name: string;
}
// https://partner.steamgames.com/doc/webapi/ISteamApps
export class SteamGamesController extends ControllerModel {
  private apiUrl: string = 'https://api.steampowered.com/';
  constructor() {
    super();
  }

  public get = async (ctx: BaseContext) => {
    const {
      applist,
    } = await AxiosUtils.get(this.steamApi('ISteamApps/GetAppList/v2/'));
    const steamGames: ISteamGame[] = applist.apps
    .filter(
      (steamGame: ISteamGame) => steamGame.appid && steamGame.name,
    );
    console.log(steamGames);
    const game = await getRepository(SteamGames)
      .createQueryBuilder()
      .insert()
      .values(steamGames)
      .execute();
    console.log(game);
    ctx.status = 200;
    ctx.body = game;
  }

  private steamApi: (url: string) => string = (url) => `${this.apiUrl}${url}`;
}
