import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { requerstSignin } from 'apis/Api';
import useValidation from 'lib/useValidation';
import { getAccessToken, hasAccessToken, registerToken } from 'tokens/token';

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

const SigninButtonDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const SiginButton = styled.button`
	width: 400px;
	outline: none;
	border-radius: 10px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 50px;
	margin-bottom: 20px;
`;

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

	useEffect(() => {
		//if (hasAccessToken()) navigate('/todo');
	}, []);

	const signupNavigate = () => {
		navigate('/signup');
	};
	return (
		<Container>
			<Item>
				<TitleDiv>
					<h1>로그인</h1>
				</TitleDiv>
				<form onSubmit={handleSignIn}>
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
								type="password"
								name="password"
								onChange={inputChange}
							/>
						</label>
						<StatusMessage>{passwordStatus.message}</StatusMessage>
					</PasswordLabelDiv>
					<SigninButtonDiv>
						<SiginButton
							data-testid="signin-button"
							disabled={!emailStatus.status || !passwordStatus.status}
							type="submit"
						>
							로그인
						</SiginButton>
						<SiginButton onClick={signupNavigate}>회원가입</SiginButton>
					</SigninButtonDiv>
				</form>
			</Item>
		</Container>
	);
}
