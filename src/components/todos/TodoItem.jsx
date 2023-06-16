import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { updateTodo } from 'apis/Api';

const ContainerUl = styled.ul`
	text-decoration: none;
	border: none;
	list-style: none;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`;

const InputButton = styled.button`
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

const LiWapper = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
`;

const LabelContainer = styled.label`
	width: 300px;
	display: flex;
	justify-content: flex-start;
`;

const ModifyText = styled.input`
	width: 100%;
	height: 32px;
	font-size: 15px;
	border: 0;
	border-radius: 15px;
	outline: none;
	padding-left: 10px;
	background-color: rgb(233, 233, 233);
	text-align: center;
`;

export default function TodoItem({
	todo,
	id,
	isCompleted,
	deletebutton,
	updateCheckTodo,
	setTodoData,
	token,
}) {
	const [buttonValid, setButtonValid] = useState(false);
	const [updateValue, setUpdateValue] = useState(todo);

	const modifyInputChange = e => {
		setUpdateValue(e.target.value);
	};
	const handleSubmit = async id => {
		setButtonValid(false);
		const res = await updateTodo(id, updateValue, isCompleted, token);
		if (res.status !== 200) {
			alert('에러가 발생했습니다');
			return;
		}
		setTodoData(prev => prev.map(todo => (todo.id === res.data.id ? res.data : todo)));
	};

	useEffect(() => {
		setUpdateValue(todo);
	}, [todo]);

	return (
		<div>
			{!buttonValid ? (
				<div>
					<ContainerUl>
						<LiWapper>
							<LabelContainer>
								<input
									type="checkbox"
									checked={isCompleted}
									onChange={() => updateCheckTodo(id, todo, isCompleted, token)}
								/>
								<span id={id}>{todo}</span>
							</LabelContainer>
							<InputButton data-testid="modify-button" onClick={() => setButtonValid(true)}>
								수정
							</InputButton>
							<InputButton data-testid="delete-button" onClick={() => deletebutton(id, token)}>
								삭제
							</InputButton>
						</LiWapper>
					</ContainerUl>
				</div>
			) : (
				<div>
					<form onSubmit={() => handleSubmit(id)}>
						<ContainerUl>
							<LiWapper>
								<LabelContainer>
									<input
										type="checkbox"
										checked={isCompleted}
										onChange={() => updateCheckTodo(id, todo, isCompleted, token)}
									/>
									<ModifyText
										data-testid="modify-input"
										value={updateValue}
										onChange={modifyInputChange}
									/>
								</LabelContainer>
								<InputButton data-testid="submit-button" type="submit">
									제출
								</InputButton>
								<InputButton data-testid="cancel-button" onClick={() => setButtonValid(false)}>
									취소
								</InputButton>
							</LiWapper>
						</ContainerUl>
					</form>
				</div>
			)}
		</div>
	);
}
