import React, { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import useFullPageLoader from '../hooks/useFullPageLoader';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import { Redirect } from 'react-router-dom';


const SignUp = (props) => {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const [loader, showLoader, hideLoader] = useFullPageLoader();


    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password,
            password2: password2,
        }

        if(password !== password2) {
            props.setAlert('Password did not match.', 'error');
            return;
        }

        try {
            setLoading(true);
            showLoader();
            props.signup({name, email, password, password2});
            hideLoader();
        } catch (error) {
            console.log(error)
        }

    }

    if (props.auth.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <div className="container bookingContainer">
                <div className="card">
                    <div className="card-body">
                        <h3>Create an account: </h3>
                        <hr />
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="form-control" required placeholder="Full Name" onChange={(evt) => setName(evt.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="form-control" required placeholder="Email" onChange={(evt) => setEmail(evt.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" required placeholder="Enter Password" onChange={(evt) => setPassword(evt.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password2" className="form-control" required placeholder="Confirm Password" onChange={(evt) => setPassword2(evt.target.value)} />
                            </div>

                            <button type="submit" name="message" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {loader}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { setAlert, signup })(SignUp);