import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import GuestLayout from '../Views/Layouts/GuestLayout';
import { useSelector } from 'react-redux';
import AdminLayout from '../Views/Layouts/AdminLayout';
import AdminHome from '../Views/AdminHome';
import store from '../Redux';

const CheckAuth = ({ children }) => {
	let isAuthenticated = useSelector((state) => {
		return state;
	});

	console.log('isAuthenticated')
	console.log(isAuthenticated)

	return (isAuthenticated.Auth.isAuthed) ? children : <Navigate to='/login' />;
};

const MyRoutes = () => {
	return (

		<Routes>
			<Route
				path='/'
				element={
					<GuestLayout>
						<Home />
					</GuestLayout>
				}
				exact
			/>
			<Route
				path='/login'
				element={
					<GuestLayout>
						<Login />
					</GuestLayout>
				}
				exact
			>
			</Route>
			<Route
				path='/adminHome'
				element={
					<CheckAuth>
						<AdminLayout>
							<AdminHome />
						</AdminLayout>
					</CheckAuth>
				}
				exact
			>
			</Route>
		</Routes>
	);
};

export default MyRoutes;
