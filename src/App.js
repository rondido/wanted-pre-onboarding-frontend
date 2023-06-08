import MainPage from 'pages/MainPage';
import SigninPage from 'pages/SigninPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/signin" element={<SigninPage />} />
		</Routes>
	);
}

export default App;
