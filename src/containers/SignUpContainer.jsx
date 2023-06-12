import React, { useState } from 'react';

import useValidation from 'lib/useValidation';

export default function SignUpContainer() {
	const [inputValid, setInputValid] = useState({
		email: '',
		password: '',
	});

	const inputChange = e => {
		const { name, value } = e.target;
		setInputValid({
			...inputValid,
			[name]: value,
		});
	};

	const [emailStatus, passwordStatus] = useValidation(inputValid);

	return (
		<>
			<h1>회원가입</h1>
			<label>
				이메일 <input data-testid="email-input" name="email" onChange={inputChange} />
				{emailStatus.message}
			</label>
			<label>
				비밀번호{' '}
				<input
					data-testid="password-input"
					name="password"
					type="password"
					onChange={inputChange}
				/>
				{passwordStatus.message}
			</label>
			<button data-testid="signup-button" disabled={!emailStatus.status || !passwordStatus.status}>
				회원가입
			</button>
		</>
	);
}
