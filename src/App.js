import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SigninPage from 'pages/SigninPage';
import TodoListPage from 'pages/TodoListPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/signin" element={<SigninPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/todo" element={<TodoListPage />} />
		</Routes>
	);
}

export default App;
