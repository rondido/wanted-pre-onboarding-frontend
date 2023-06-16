import { apiClient } from './apiClient';

//회원가입
export async function requerstSignUp({ email, password }) {
	try {
		const res = await apiClient.post(`auth/signup`, {
			email: email,
			password: password,
		});
		return res.status;
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function requerstSignin({ email, password }) {
	try {
		const res = await apiClient.post(`/auth/signin`, {
			email: email,
			password: password,
		});

		return res;
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function createTodo(token, todo) {
	try {
		const res = await apiClient.post(
			`todos`,
			{
				todo: todo,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return res;
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function getTodo(token) {
	try {
		const res = await apiClient.get(`todos`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function deleteTodo(id, token) {
	try {
		const res = await apiClient.delete(`todos/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (e) {
		console.error(e);
		return e;
	}
}

export async function updateTodo(id, todo, isCompleted, token) {
	try {
		const res = await apiClient.put(
			`todos/${id}`,
			{
				todo: todo,
				isCompleted: isCompleted,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return res;
	} catch (e) {
		console.error(e);
		return e;
	}
}
