import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/Api';
import TodoView from 'components/views/todo/TodoView';
import { removeAccessToken } from 'tokens/token';

export default function TodoListContainer({ token }) {
	const [inputValue, setInputValue] = useState();
	const [todoData, setTodoData] = useState([]);
	const navigator = useNavigate();
	async function createTodoRender(token, todo) {
		const res = await createTodo(token, todo);
		if (res.staus !== 201) {
			alert('에러가 발생했습니다');
			return;
		}
		getDataTodos();
	}

	async function deleteTodoRender(id, token) {
		const res = await deleteTodo(id, token);
		if (res !== 204) {
			alert('에러가 발생했습니다');
			return;
		}
		getDataTodos();
	}

	const todoChange = e => {
		const value = e.target.value;
		setInputValue(value);
	};

	const addTodoSubmit = e => {
		e.preventDefault();
		createTodoRender(token, inputValue);
		setInputValue('');
	};

	const getDataTodos = async () => {
		const getTodoList = await getTodo(token);
		setTodoData(getTodoList.data);
	};

	const updateCheckTodo = async (id, todo, isCompleted, token) => {
		isCompleted = !isCompleted;
		const res = await updateTodo(id, todo, isCompleted, token);
		if (res.staus !== 200) {
			alert('에러가 발생했습니다');
			return;
		}
		getDataTodos();
	};
	const LogoutButton = () => {
		removeAccessToken();
		navigator('/signin');
		return;
	};

	useEffect(() => {
		getDataTodos();
	}, []);

	return (
		<TodoView
			addTodoSubmit={addTodoSubmit}
			todoChange={todoChange}
			updateCheckTodo={updateCheckTodo}
			deleteTodoRender={deleteTodoRender}
			todoData={todoData}
			inputValue={inputValue}
			setTodoData={setTodoData}
			token={token}
			LogoutButton={LogoutButton}
		/>
	);
}
