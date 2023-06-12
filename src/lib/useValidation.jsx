import { useEffect, useState } from 'react';

export default function useValidation(target) {
	const { email, password } = target;
	const [emailStatus, setEmailStatus] = useState({
		message: '',
		status: false,
	});

	const [passwordStatus, setPasswordStatus] = useState({
		message: '',
		status: false,
	});

	useEffect(() => {
		const emailValid = email.includes('@');
		if (!emailValid) {
			setEmailStatus({
				message: '이메일이 @를 포함시켜주세요',
				status: false,
			});
		}
		if (emailValid) {
			setEmailStatus({
				message: '',
				status: true,
			});
		}
	}, [email]);

	useEffect(() => {
		const passwordValid = password.length >= 8;
		if (!passwordValid) {
			setPasswordStatus({
				message: '비밀번호는 8자이상이여야 합니다.',
				status: false,
			});
		}
		if (passwordValid) {
			setPasswordStatus({
				message: '',
				status: true,
			});
		}
	}, [password]);

	return [emailStatus, passwordStatus];
}
