import React, { Fragment } from 'react';
import navStyles from './styles/NavBar.module.css';

const navbar = () => {
    const authLink = (
        <a className={navStyles.auth_link} href="#">Logout</a>
    )

    const guestLink = (
        <Fragment>
            <a className={navStyles.auth_link, navStyles.mright20} href="#">Login</a>
            <a className={navStyles.auth_link} href="#">Sign Up</a>
        </Fragment>
    )

    return (
        <Fragment>
            <div id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <h1><a href="index.html">Everest</a></h1>
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="/index">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </div >
            <div style={{ clear: 'both' }}></div>
        </Fragment>

    );
}

export default navbar;