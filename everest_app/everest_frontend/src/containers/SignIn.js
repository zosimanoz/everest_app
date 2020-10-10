import React, { useState, useEffect } from 'react';
import { Link, Redirect, useLocation, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';
import styles from './styles/SignIn.module.css';
import { SEO } from '../components';
import useFullPageLoader from '../hooks/useFullPageLoader';

const SignIn = ({ history, login, isAuthenticated }) => {

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);
        showLoader();
        setTimeout(() => {
            login(email, password);
            hideLoader();
        }, 300);
    }

    if (location.state) {
        if (isAuthenticated)
            history.push(location.state.from.pathname);
    } else {
        if (isAuthenticated)
            return <Redirect to='/' />
    }

    return (
        <div className={`${styles.authDiv} container bookingContainer`}>
            <SEO title="Sign In" />
            <div className="row justify-content-center">
                <div className="col-offset-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 style={{marginLeft: '12px'}}>Login: </h3>
                            <hr/>
                            <form onSubmit={e => onSubmit(e)} role="form" className="form" style={{ marginBottom: '20px' }}>
                                <div className="col-md-12 form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                    />
                                </div>

                                <div className="col-md-12 form-group">
                                    <div>
                                        <span><Link className="float-left" style={{ marginTop: '8px' }} to="/signup">Click to register here</Link></span>
                                        <button type="submit" className="btn btn-primary float-right">Login</button>
                                    </div>
                                </div>

                                <div style={{ float: 'clear' }}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {loader}
        </div>
    );
}

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(withRouter(SignIn));