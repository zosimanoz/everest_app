import React, { Fragment } from 'react';
import navStyles from './styles/NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';

const navbar = ({ auth: { isAuthenticated, loading }, logout, settings }) => {
    
    const authLink = (
        <li className="nav-item"><a className={`${navStyles.auth_link} nav-link`} href="#" onClick={logout}>Logout</a></li>
    )

    const guestLink = (
        <Fragment>
            <li className="nav-item"><Link className={`${navStyles.auth_link} nav-link`} to="/login">Login</Link></li>
            <li className="nav-item"><Link className={`${navStyles.auth_link} nav-link`} to="/signup">Sign Up</Link></li>
        </Fragment>
    )

    return (
        <Fragment>
            {/* <div id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <Link to="/"><img src={settings && settings.logo} alt="" className="img-fluid" /></Link>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            {!loading && (<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>)}

                        </ul>
                    </nav>
                </div>
            </div > */}
            <div id="header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo mr-auto"><Link to="/" className="navbar-brand"><img src={settings && settings.logo} alt="" className="img-fluid" /></Link></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav mr-auto"></ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                {!loading && (<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>)}
                            </ul>
                        </div>
                    </nav>

                </div></div>
        </Fragment>

    );
}


navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, { logout })(navbar);