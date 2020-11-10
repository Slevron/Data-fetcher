import { SteamGamesController } from '../controllers/SteamGamesController';
import { IRouter } from './interface';

export const routerConfig: IRouter[] = [
  {
    controller: new SteamGamesController(),
    prefix: 'steamGames',
  },
];
