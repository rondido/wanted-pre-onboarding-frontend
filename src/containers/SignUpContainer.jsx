import React from 'react';

export default function SignUpContainer() {
	return (
		<>
			<h1>회원가입</h1>
			<label>
				이메일 <input data-testid="email-input" />
			</label>
			<label>
				비밀번호 <input data-testid="password-input" />
			</label>
			<button data-testid="signup-button">회원가입</button>
		</>
	);
}
