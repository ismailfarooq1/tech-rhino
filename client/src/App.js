import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

// const getToken = () => {


// 	return (isAuthenticated);
// }



const App = () => {

	let isAuthenticated = useSelector((state) => { return state });

	axios.defaults.baseURL = 'http://127.0.0.1:8001/';
	axios.defaults.headers = { Authorization: 'Bearer ' + isAuthenticated.Auth.token };

	return (
		<BrowserRouter>
			<MyRoutes />
		</BrowserRouter>
	);
};
export default App;
