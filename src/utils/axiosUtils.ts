import axios from 'axios';

class AxiosWrapper {
	public async get(path: string) {
		try {
			const response = await axios.get(path);

			return response.data;
		} catch (error) {

			return error;
		}
	}
}

export const AxiosUtils = new AxiosWrapper();
