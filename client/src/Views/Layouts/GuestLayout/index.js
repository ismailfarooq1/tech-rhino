import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo2.png';
import './styles.css'
import Footer from '../../../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Actions/Auth'

const GuestLayout = ({ children }) => {

    const [isAuthed, setIsAuthed] = useState(false);
    const dispatch = useDispatch();

    let isAuthenticated = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        setIsAuthed(() => {
            return isAuthenticated.Auth.isAuthed;
        });
    })

    const logoutButton = () => {
        dispatch(logout())
    }

    return (
        <div className="guest-layout">
            {/* <div className="header-guest">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light p-3">
                    <div className="container-fluid">

                        <a className="navbar-brand">
                            <img src={logo} className="logo1" alt='logo'></img>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav w-100">
                                <Link className='nav-link nav-link-left' to='/'>Home</Link>
                                <Link className='nav-link nav-link-left' to='/'>Projects</Link>
                                <Link className='nav-link nav-link-left' to='/'>About Us</Link>
                                <Link className='nav-link nav-link-left' to='/'>Contact Us</Link>
                                <Link className='nav-link nav-link-left' to='/'>Blog</Link>
                                <Link className='nav-link nav-link-left' to='/'>Offers</Link>
                                <Link className='nav-link nav-link-left' to='/'>Reviews</Link>

                                {(isAuthed) ? <Link className='nav-link nav-link-right ms-auto' to='/adminHome'>Admin Home</Link> : <Link className='nav-link nav-link-right ms-auto' to='/login'>Login</Link>}
                                {(isAuthed) ? <Link className='nav-link nav-link-right ms-auto' to='/' onClick={logoutButton}>Logout</Link> : ''}

                            </div>

                        </div>
                    </div>
                </nav>
            </div> */}
            <div className="body-guest">
                {children}
            </div>
            <Footer />



        </div>
    );
}

export default GuestLayout;