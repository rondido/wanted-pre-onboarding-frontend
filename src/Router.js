import { Routes, Route, useLocation } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SigninPage from 'pages/SigninPage';
import TodoListPage from 'pages/TodoListPage';
import NotPoundPage from 'pages/NotPoundPage';

export default function Router() {
	const location = useLocation();
	const hash = location.hash || location.search;

	return (
		<Routes>
			{hash.length > 0 ? (
				<Route path="*" element={<NotPoundPage />} />
			) : (
				<Route path="/" element={<MainPage />}>
					<Route path="/signin" element={<SigninPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/todo" element={<TodoListPage />} />
				</Route>
			)}
			<Route path="*" element={<NotPoundPage />} />
		</Routes>
	);
}
