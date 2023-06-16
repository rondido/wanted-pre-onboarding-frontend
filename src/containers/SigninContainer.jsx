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

		if (token.status === 200) {
			registerToken(token.data.access_token);
			navigate('/todo');
			return;
		}
		if (token.status !== 401) {
			alert('이메일과 비밀번호 올바르지 않습니다.');
			return;
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
