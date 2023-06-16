import React, { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/Api';
import TodoView from 'components/views/todo/TodoView';

export default function TodoListContainer(token) {
	const [inputValue, setInputValue] = useState();
	const [todoData, setTodoData] = useState([]);

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
		const getTodoList = await getTodo(token);
		setTodoData(getTodoList.data);
	};

	const updateCheckTodo = async (id, todo, isCompleted) => {
		isCompleted = !isCompleted;
		await updateTodo(id, todo, isCompleted);
		getDataTodos();
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
		/>
	);
}
