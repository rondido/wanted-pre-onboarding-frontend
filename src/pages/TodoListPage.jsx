import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoListContainer from 'containers/TodoListContainer';

import { getAccessToken, hasAccessToken } from 'tokens/token';

export default function TodoListPage() {
	const token = getAccessToken();
	const navigator = useNavigate();
	useEffect(() => {
		if (!hasAccessToken) {
			navigator('/signin');
			return;
		}
	}, []);

	return <TodoListContainer token={token} />;
}
