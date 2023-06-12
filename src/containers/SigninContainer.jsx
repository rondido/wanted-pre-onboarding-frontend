import React, { useState } from 'react';

import useValidation from 'lib/useValidation';

export default function SignInContainer() {
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
			<h1>로그인</h1>
			<label>
				이메일 : <input data-testid="email-input" name="email" onChange={inputChange} />
				{emailStatus.message}
			</label>
			<br />
			<label>
				비밀번호
				<input
					data-testid="password-input"
					type="password"
					name="password"
					onChange={inputChange}
				/>
				{passwordStatus.message}
			</label>
			<button data-testid="signin-button" disabled={!emailStatus.status || !passwordStatus.status}>
				로그인
			</button>
		</>
	);
}
