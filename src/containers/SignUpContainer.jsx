import { useState } from 'react';
import { useNavigate } from 'react-router';

import useValidation from 'lib/useValidation';
import { requerstSignUp } from 'apis/Api';
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
		console.log(status);
		if (status === 201) navigate('/signin');
		if (status === 400) {
			alert(status.response.data.message);
		}
	}

	const handleSignUp = e => {
		e.preventDefault();
		postSignupRender(signUpFormData);
	};

	const singUpNavigate = () => {
		navigate('/signin');
	};

	return (
		<SignupView
			inputChange={inputChange}
			passwordStatus={passwordStatus}
			emailStatus={emailStatus}
			singinNavigate={singUpNavigate}
			handleSignUp={handleSignUp}
		/>
	);
}
