import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SigninPage from 'pages/SigninPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/signin" element={<SigninPage />} />
			<Route path="/signup" element={<SignUpPage />} />
		</Routes>
	);
}

export default App;
