const ACCESS_TOKEN = 'access_token';

export function registerToken(token) {
	localStorage.setItem(ACCESS_TOKEN, token);
}

export function getAccessToken() {
	return localStorage.getItem(ACCESS_TOKEN);
}

export function removeAccessToken() {
	localStorage.removeItem(ACCESS_TOKEN);
}

export function hasAccessToken() {
	return getAccessToken() !== undefined && getAccessToken() !== null;
}
