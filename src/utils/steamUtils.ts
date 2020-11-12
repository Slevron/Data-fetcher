import { AxiosUtils } from './axiosUtils';

interface ISteamGame {
  appid: string;
  name: string;
}
class SteamWrapper {
	private apiUrl: string = 'https://api.steampowered.com/';

	public async getListGames(): Promise<ISteamGame[]> {
		const {
      applist,
		} = await AxiosUtils.get(this.steamApi('ISteamApps/GetAppList/v2/'));

  const steamGames: ISteamGame[] = applist.apps
      .filter(
        (steamGame: ISteamGame) => steamGame.appid && steamGame.name,
			);

		return steamGames;
	}

	private steamApi: (url: string) => string = (url) => `${this.apiUrl}${url}`;
}

export const SteamApi = new SteamWrapper();
