import React from 'react';
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
	flex-direction: column;
	align-items: center;
`;

const SigupButton = styled.button`
	width: 400px;
	outline: none;
	border-radius: 10px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 50px;
	margin-bottom: 20px;
`;

export default function SignupView({
	inputChange,
	emailStatus,
	passwordStatus,
	singinNavigate,
	handleSignUp,
}) {
	return (
		<Container>
			<Item>
				<TitleDiv>
					<h1>회원가입</h1>
				</TitleDiv>
				<form onSubmit={handleSignUp}>
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
						<SigupButton onClick={singinNavigate}>로그인</SigupButton>
					</SignupButtonDiv>
				</form>
			</Item>
		</Container>
	);
}
