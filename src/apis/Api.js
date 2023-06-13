import axios from 'axios';
import { USER_ACCESS_TOKEN } from 'token/USER_ACCESS_TOKEN';

const token = USER_ACCESS_TOKEN;
const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

//회원가입
export async function authSignUp({ email, password }) {
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

export async function authSignin({ email, password }) {
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
		const data = res.data;
		return data;
	} catch (e) {
		console.error(e);
	}
}

export async function createTodo(todo) {
	try {
		const res = await axios.post(
			`${BASE_URL}todos`,
			{
				todo: todo,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return res;
	} catch (e) {
		console.error(e);
	}
}

export async function getTodo() {
	try {
		const res = await axios.get(`${BASE_URL}todos`, {
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
		const res = await axios.delete(`${BASE_URL}todos/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (e) {
		console.error(e);
	}
}

export async function updateTodo(id, todo, isCompleted) {
	try {
		const res = await axios.put(
			`${BASE_URL}todos/${id}`,
			{
				todo: todo,
				isCompleted: isCompleted,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			},
		);
		return res;
	} catch (e) {
		console.error(e);
	}
}
