import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SigninPage from 'pages/SigninPage';
import TodoListPage from 'pages/TodoListPage';
import NotPoundPage from 'pages/NotPoundPage';

function App() {
	const Path = {
		main: '/',
		signin: '/signin',
		signup: '/signup',
		todo: '/todo',
		error: '*',
	};

	return (
		<Routes>
			<Route path={Path.main} element={<MainPage />} />
			<Route path={Path.signin} element={<SigninPage />} />
			<Route path={Path.signup} element={<SignUpPage />} />
			<Route path={Path.todo} element={<TodoListPage />} />
			<Route path="*" element={<NotPoundPage />} />
		</Routes>
	);
}

export default App;
