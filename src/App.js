import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SigninPage from 'pages/SigninPage';
import TodoListPage from 'pages/TodoListPage';
import NotPoundPage from 'pages/NotPoundPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/signin" element={<SigninPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/todo" element={<TodoListPage />} />
			<Route path="*" element={<NotPoundPage />} />
		</Routes>
	);
}

export default App;
