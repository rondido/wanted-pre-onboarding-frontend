import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TodoItem from './components/Todos/TodoItem';
import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/Api';
import { USER_ACCESS_TOKEN } from 'token/USER_ACCESS_TOKEN';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 500px;
	height: 100%;
`;

const WapperDiv = styled.div`
	width: 500px;
	height: 500px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const TitleDiv = styled.div`
	margin-bottom: 5%;
	display: flex;
	justify-content: center;
`;

const FormDiv = styled.form`
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AddInputText = styled.input`
	width: 300px;
	height: 32px;
	font-size: 15px;
	border: 0;
	border-radius: 15px;
	outline: none;
	padding-left: 10px;
	background-color: rgb(233, 233, 233);
	&:focus {
		outline: none;
	}
`;

const InputButton = styled.button`
	outline: none;
	border-radius: 1px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 30px;
	width: 50px;
	margin-left: 5%;
	&:hover {
		background-color: aliceblue;
	}
`;
const TodoItemDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 90%;
`;
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
	}, []);

	return (
		<>
			<Container>
				<WapperDiv>
					<TitleDiv>
						<h1>할일 목록</h1>
					</TitleDiv>
					<FormDiv onSubmit={addTodoSubmit}>
						<AddInputText
							data-testid="new-todo-input"
							value={inputValue || ''}
							onChange={todoChange}
						/>
						<InputButton data-testid="new-todo-add-button">추가</InputButton>
					</FormDiv>
					{todoData &&
						todoData.map((v, i) => (
							<TodoItemDiv key={i}>
								<TodoItem
									todo={v.todo}
									id={v.id}
									isCompleted={v.isCompleted}
									deletebutton={deleteTodoRender}
									updateCheckTodo={updateCheckTodo}
								/>
							</TodoItemDiv>
						))}
				</WapperDiv>
			</Container>
		</>
	);
}
