import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/main" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			<Route path="/main" element={<Navigate replace to="/" />} />
			<Route path="*" element={<h1>404 NOT FOUND</h1>} />
		</Routes>
	);
}

export default App;
