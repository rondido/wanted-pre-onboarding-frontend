import React, { useEffect, useState } from 'react';

import TodoItem from './components/Todos/TodoItem';
import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/Api';

export default function TodoListContainer() {
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
		const getTodoList = await getTodo();
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
		<>
			<div>
				<h1>할일 목록</h1>
				<form onSubmit={addTodoSubmit}>
					<input data-testid="new-todo-input" value={inputValue} onChange={todoChange} />
					<button data-testid="new-todo-add-button">추가</button>
				</form>
				<div>
					{todoData &&
						todoData.map((v, i) => (
							<div key={i}>
								<TodoItem
									todo={v.todo}
									id={v.id}
									isCompleted={v.isCompleted}
									deletebutton={deleteTodoRender}
									updateCheckTodo={updateCheckTodo}
								/>
							</div>
						))}
				</div>
			</div>
		</>
	);
}
