import React, { useState } from 'react';

import { updateTodo } from 'apis/Api';

export default function TodoItem({ todo, id, isCompleted, deletebutton, updateCheckTodo }) {
	const [buttonValid, setButtonValid] = useState(false);
	const [updateValue, setUpdateValue] = useState('');

	async function updateTodoRender(id, todo, isCompleted) {
		await updateTodo(id, todo, isCompleted);
	}
	const modifyInputChange = e => {
		setUpdateValue(e.target.value);
	};

	const updateOnSubmit = id => {
		setButtonValid(true);
		updateTodoRender(id, updateValue, isCompleted);
	};

	return (
		<div>
			{!buttonValid ? (
				<>
					<li>
						<label>
							<input
								type="checkbox"
								checked={isCompleted}
								onChange={() => updateCheckTodo(id, todo, isCompleted)}
							/>
							<span id={id}>{todo}</span>
						</label>
						<button data-testid="modify-button" onClick={() => setButtonValid(true)}>
							수정
						</button>
						<button data-testid="delete-button" onClick={() => deletebutton(id)}>
							삭제
						</button>
					</li>
				</>
			) : (
				<>
					<form onSubmit={() => updateOnSubmit(id)}>
						<li>
							<label>
								<input type="checkbox" />
								<input
									data-testid="modify-input"
									defaultValue={todo}
									onChange={modifyInputChange}
								/>
							</label>
							<button data-testid="submit-button">제출</button>
							<button data-testid="cancel-button" onClick={() => setButtonValid(false)}>
								취소
							</button>
						</li>
					</form>
				</>
			)}
		</div>
	);
}
