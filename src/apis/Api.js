import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

//회원가입
async function authSignUp({ email, password }) {
	console.log(email, password);
	try {
		const res = await axios.post(
			`${BASE_URL}auth/signup`,
			{
				email: email,
				password: password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const data = await res.status;
		return data;
	} catch (e) {
		console.error(e);
	}
}

export { authSignUp };
