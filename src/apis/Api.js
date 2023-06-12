import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

//회원가입
async function authSignUp({ email, password }) {
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

async function authSignin({ email, password }) {
	try {
		const res = await axios.post(
			`${BASE_URL}auth/signin`,
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
		const data = await res.data;
		return data;
	} catch (e) {
		console.error(e);
	}
}

export { authSignUp, authSignin };
