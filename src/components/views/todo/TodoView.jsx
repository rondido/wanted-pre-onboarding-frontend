import React from 'react';
import styled from 'styled-components';

import TodoItems from './TodoItems';
import TodoForm from './TodoForm';

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

export default function TodoView({
	addTodoSubmit,
	inputValue,
	todoChange,
	todoData,
	deleteTodoRender,
	updateCheckTodo,
	setTodoData,
	token,
	LogoutButton,
}) {
	return (
		<Container>
			<WapperDiv>
				<TodoForm
					addTodoSubmit={addTodoSubmit}
					inputValue={inputValue}
					todoChange={todoChange}
					LogoutButton={LogoutButton}
				/>
				<TodoItems
					todoData={todoData}
					deleteTodoRender={deleteTodoRender}
					updateCheckTodo={updateCheckTodo}
					setTodoData={setTodoData}
					token={token}
				/>
			</WapperDiv>
		</Container>
	);
}
