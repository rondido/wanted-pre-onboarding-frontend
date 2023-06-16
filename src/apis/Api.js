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
	}
}

export async function requerstSignin({ email, password }) {
	try {
		const res = await apiClient.post(`/auth/signin`, {
			email: email,
			password: password,
		});
		const data = res.data;
		return data;
	} catch (e) {
		console.error(e);
	}
}

export async function createTodo(todo, token) {
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
	}
}

export async function getTodo({ token }) {
	console.log(token);
	try {
		const res = await apiClient.get(`todos`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (e) {
		console.error(e);
	}
}

export async function deleteTodo(id) {
	try {
		const res = await apiClient.delete(`todos/${id}`);
		return res;
	} catch (e) {
		console.error(e);
	}
}

export async function updateTodo(id, todo, isCompleted) {
	try {
		const res = await apiClient.put(`todos/${id}`, {
			todo: todo,
			isCompleted: isCompleted,
		});
		console.log(res);
		return res;
	} catch (e) {
		console.error(e);
	}
}
