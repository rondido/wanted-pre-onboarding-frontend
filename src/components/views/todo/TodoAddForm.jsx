import React from 'react';
import styled from 'styled-components';

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

const InputLogoutButton = styled.button`
	outline: none;
	border-radius: 1px;
	background-color: rgb(233, 233, 233);
	border: 0;
	height: 30px;
	width: 80px;
	margin-left: 5%;
	&:hover {
		background-color: aliceblue;
	}
`;

export default function TodoAddForm({ addTodoSubmit, inputValue, todoChange, LogoutButton }) {
	return (
		<div>
			<TitleDiv>
				<h1>할일 목록</h1>
			</TitleDiv>
			<FormDiv onSubmit={addTodoSubmit}>
				<AddInputText data-testid="new-todo-input" value={inputValue || ''} onChange={todoChange} />
				<InputButton data-testid="new-todo-add-button">추가</InputButton>
				<InputLogoutButton type="button" onClick={LogoutButton}>
					로그아웃
				</InputLogoutButton>
			</FormDiv>
		</div>
	);
}
