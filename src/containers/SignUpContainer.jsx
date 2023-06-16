import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import useValidation from 'lib/useValidation';
import { requerstSignUp } from 'apis/Api';
import { hasAccessToken } from 'tokens/token';
import SignupView from 'components/views/signup/SignupView';

export default function SignUpContainer() {
	const [signUpFormData, setSignUpFormData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const [emailStatus, passwordStatus] = useValidation(signUpFormData);

	const inputChange = e => {
		const { name, value } = e.target;
		setSignUpFormData({
			...signUpFormData,
			[name]: value,
		});
	};

	async function postSignupRender({ email, password }) {
		const status = await requerstSignUp({ email, password });
		if (status === 201) navigate('/signin');
	}

	const handleSignUp = e => {
		e.preventDefault();
		postSignupRender(signUpFormData);
	};

	useEffect(() => {
		if (hasAccessToken()) navigate('/todo');
	}, []);

	const singinNavigate = () => {
		navigate('/signin');
	};

	return (
		<SignupView
			inputChange={inputChange}
			passwordStatus={passwordStatus}
			emailStatus={emailStatus}
			singinNavigate={singinNavigate}
			handleSignUp={handleSignUp}
		/>
	);
}
