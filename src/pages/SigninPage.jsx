import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInContainer from 'containers/SigninContainer';
import { hasAccessToken } from 'tokens/token';

export default function SigninPage() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!hasAccessToken()) {
			navigate('/todo');
			return;
		}
	}, []);
	return <SignInContainer />;
}
