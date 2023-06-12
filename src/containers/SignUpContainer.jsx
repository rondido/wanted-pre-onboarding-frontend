import React, { useState } from 'react';

import useValidation from 'lib/useValidation';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Georgia, 'Times New Roman', serif;
`;

const Item = styled.div`
	width: 500px;
	height: 500px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const TitleDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const EmailLabelDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const PasswordLabelDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const InputFiled = styled.input`
	width: 300px;
	outline: none;
	border-radius: 10px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 30px;
`;

const StatusMessage = styled.p`
	color: red;
`;

const SignupButtonDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const SigupButton = styled.button`
	width: 400px;
	outline: none;
	border-radius: 10px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 50px;
`;

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
		<Container>
			<Item>
				<TitleDiv>
					<h1>회원가입</h1>
				</TitleDiv>
				<EmailLabelDiv>
					<label>
						이메일 <InputFiled data-testid="email-input" name="email" onChange={inputChange} />
					</label>
					<StatusMessage>{emailStatus.message}</StatusMessage>
				</EmailLabelDiv>
				<PasswordLabelDiv>
					<label>
						비밀번호
						<InputFiled
							data-testid="password-input"
							name="password"
							type="password"
							onChange={inputChange}
						/>
					</label>
					<StatusMessage>{passwordStatus.message}</StatusMessage>
				</PasswordLabelDiv>
				<SignupButtonDiv>
					<SigupButton
						data-testid="signup-button"
						disabled={!emailStatus.status || !passwordStatus.status}
					>
						회원가입
					</SigupButton>
				</SignupButtonDiv>
			</Item>
		</Container>
	);
}
