import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const apiClient = axios.create({
	baseURL: `${BASE_URL}`,
});
