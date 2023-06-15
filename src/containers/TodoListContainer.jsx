import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/Api';
import TodoView from 'components/views/todo/TodoView';

export default function TodoListContainer() {
	const [inputValue, setInputValue] = useState();
	const [todoData, setTodoData] = useState([]);
	const navigator = useNavigate();

	async function createTodoRender(todo) {
		await createTodo(todo);
		getDataTodos();
	}

	async function deleteTodoRender(id) {
		await deleteTodo(id);
		getDataTodos();
	}

	const todoChange = e => {
		const value = e.target.value;
		setInputValue(value);
	};

	const addTodoSubmit = e => {
		e.preventDefault();
		createTodoRender(inputValue);
		setInputValue('');
	};

	const getDataTodos = async () => {
		const getTodoList = await getTodo();
		setTodoData(getTodoList.data);
	};

	const updateCheckTodo = async (id, todo, isCompleted) => {
		isCompleted = !isCompleted;
		await updateTodo(id, todo, isCompleted);
		getDataTodos();
	};

	useEffect(() => {
		if (localStorage.getItem('access_token') == null) {
			navigator('/signin');
			return;
		}
		if (localStorage.getItem('access_token').length > 0) {
			getDataTodos();
		}
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
		/>
	);
}
