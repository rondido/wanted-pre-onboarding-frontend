import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpContainer from 'containers/SignUpContainer';
import { hasAccessToken } from 'tokens/token';

export default function SignUpPage() {
	const navigate = useNavigate();
	useEffect(() => {
		if (hasAccessToken()) {
			navigate('/todo');
			return;
		}
	}, []);
	return <SignUpContainer />;
}
