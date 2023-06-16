import { useState, useEffect } from 'react';

const useInitialAccessToken = () => {
	const [accessToken, setAccessToken] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAccessToken = () => {
			try {
				const storedAccessToken = localStorage.getItem('access_token');
				if (storedAccessToken) {
					setAccessToken(storedAccessToken);
				}
				setLoading(false);
			} catch (error) {
				console.error('Failed to fetch access token:', error);
				setLoading(false);
			}
		};

		fetchAccessToken();
	}, []);

	return [accessToken, isLoading];
};

export default useInitialAccessToken;
