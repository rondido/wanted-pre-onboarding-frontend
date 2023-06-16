import { useState } from 'react';
import { useNavigate } from 'react-router';

import { requerstSignin } from 'apis/Api';
import useValidation from 'lib/useValidation';
import { registerToken } from 'tokens/token';
import SigninView from 'components/views/singin/SigninView';

export default function SignInContainer() {
	const [signInFormData, setSignInFormData] = useState({
		email: '',
		password: '',
	});

	const inputChange = e => {
		const { name, value } = e.target;
		setSignInFormData({
			...signInFormData,
			[name]: value,
		});
	};

	const navigate = useNavigate();
	const [emailStatus, passwordStatus] = useValidation(signInFormData);

	async function postSigninRender({ email, password }) {
		const token = await requerstSignin({ email, password });

		if (token) {
			registerToken(token.access_token);
			navigate('/todo');
		}
	}
	const handleSignIn = e => {
		e.preventDefault();
		postSigninRender(signInFormData);
	};

	const signInNavigate = () => {
		navigate('/signup');
	};
	return (
		<SigninView
			signInNavigate={signInNavigate}
			passwordStatus={passwordStatus}
			emailStatus={emailStatus}
			handleSignIn={handleSignIn}
			inputChange={inputChange}
		/>
	);
}
