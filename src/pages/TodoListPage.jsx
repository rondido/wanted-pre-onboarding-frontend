import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoListContainer from 'containers/TodoListContainer';

import useInitialAccessToken from 'lib/useTokenHandler';
import { getAccessToken } from 'tokens/token';

export default function TodoListPage() {
	const [token, isLoading] = useInitialAccessToken();
	// const token1 = getAccessToken();
	// console.log(token);
	const navigator = useNavigate();
	useEffect(() => {
		if (!isLoading) {
			navigator('/signin');
			return;
		}
	}, []);

	return <TodoListContainer token={token} />;
}
