import React, { Fragment } from 'react';
import navStyles from './styles/NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';

const navbar = ({ auth: { isAuthenticated, loading }, logout, settings }) => {
    const authLink = (
        <li><a className={navStyles.auth_link} href="#" onClick={logout}>Logout</a></li>
    )

    const guestLink = (
        <Fragment>
            <li><Link className={navStyles.auth_link} to="/login">Login</Link></li>
            <li><Link className={navStyles.auth_link} to="/signup">Sign Up</Link></li>
        </Fragment>
    )

    return (
        <Fragment>
            <div id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        {/* <h1><Link to="/">Everest</Link></h1> */}
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
            </div >
            <div style={{ clear: 'both' }}></div>

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