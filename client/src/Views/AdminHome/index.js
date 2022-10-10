import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'universal-cookie';
import { index } from '../../Redux/Actions/Post';

const AdminHome = ({ children }) => {

	const dispatch = useDispatch();

	let isAuthenticated = useSelector((state) => {
		return state;
	});

	const getPosts = () => {
		console.log('posts');
		dispatch(index());
	}

	const checkToken = () => {
		console.log(isAuthenticated);
		console.log('Check token here.');
	}

	return (
		<div className='admin-home'>
			<div className='section bg-light'>
				<a className='btn btn-primary' onClick={getPosts}>Get All Posts</a>
				<a className='btn btn-primary' onClick={checkToken}>Check token</a>
			</div>
		</div>
	);
};

export default AdminHome;
