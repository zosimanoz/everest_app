import React, { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles/Contact.module.css';
import useFullPageLoader from '../hooks/useFullPageLoader';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import { setAlert } from '../actions/alert';

const Contact = (props) => {

    let data = null;

    if (props.settings && props.settings.length > 0) {
        data = [...props.settings];
    }

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState();

    const [loader, showLoader, hideLoader] = useFullPageLoader();


    const onSubmit = async (e) => {
        e.preventDefault();

        let data = {}
        data.query = {
            name: name,
            contact_number: contactNumber,
            message: message,
            email: email
        }

        try {
            setLoading(true);
            showLoader();

            const res = await axiosInstance.post(`${apiEndPoints.baseUrl}` + '/query/save/', data);
            if (res.data.status_code == 200) {
                props.setAlert("Query sent successfully.", 'success');
                props.history.push('/', { from: props.history.location })
            }
            else {
                props.setAlert("Failed to send query.", 'error');
            }

            hideLoader();
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Fragment>
            <div className="container" style={{ marginTop: '90px' }}>
                <div className="row">
                    <div className="col-md-8">
                        <div className={styles.map}>
                            <div dangerouslySetInnerHTML={{ __html: data && data[0].map_iframe_script }} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.contact_form}>
                            <h1>Contact Us</h1>
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
                                    <input type="text" name="contact_number" className="form-control" placeholder="Phone Number" onChange={(evt) => setContactNumber(evt.target.value)} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="3" onChange={(evt) => setMessage(evt.target.value)}></textarea>
                                </div>

                                <button type="submit" name="message" className="btn btn-primary">Submit</button>
                            </form>

                            <div className="card" style={{ marginTop: '10px' }}>
                                <div className="card-body">
                                    <p>Contact Number: {data && data[0].contact_number1}</p>
                                    <p>Email Address : {data && data[0].email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loader}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    settings: state.settings
})

export default connect(mapStateToProps, { setAlert })(Contact);