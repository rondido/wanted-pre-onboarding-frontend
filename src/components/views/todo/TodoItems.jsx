import React from 'react';
import styled from 'styled-components';

import TodoItem from '../../todos/TodoItem';

const TodoItemDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 90%;
`;

export default function TodoItems({
	todoData,
	deleteTodoRender,
	updateCheckTodo,
	setTodoData,
	token,
}) {
	return (
		<div>
			{todoData &&
				todoData.map((v, i) => (
					<TodoItemDiv key={i}>
						<TodoItem
							todo={v.todo}
							id={v.id}
							isCompleted={v.isCompleted}
							deletebutton={deleteTodoRender}
							updateCheckTodo={updateCheckTodo}
							setTodoData={setTodoData}
							token={token}
						/>
					</TodoItemDiv>
				))}
		</div>
	);
}
