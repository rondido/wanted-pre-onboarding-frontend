import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';
const token = localStorage.getItem('access_token');

export const apiClient = axios.create({
	baseURL: `${BASE_URL}`,
	headers: {
		Authorization: token ? `Bearer ${token}` : '',
	},
});
