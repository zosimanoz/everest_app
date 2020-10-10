import React, { useState, useEffect } from 'react';
import { Redirect, useParams, withRouter } from "react-router";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useFullPageLoader from '../hooks/useFullPageLoader';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import decodeToken from '../utils/tokenHelper';
import axios from 'axios';
import { setAlert } from '../actions/alert';



const BookNow = ({ auth, history, setAlert }) => {

    const [loading, setLoading] = useState(false);
    const [serviceDetail, setServiceDetail] = useState(null);
    const [phone_number, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [service_type, setSeviceType] = useState("");
    const [timeslot, setTimeSlot] = useState("");
    const [cover_image, setCoverImage] = useState();
    const [description, setDescription] = useState("");

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const routeParams = useParams();

    const token_detail = decodeToken();

    useEffect(() => {
        getServiceDetails()
    }, [])

    const getServiceDetails = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/services/detail/' + `${routeParams.slug}`);
            setServiceDetail(res.data.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(serviceDetail)
        const uploadData = new FormData();
        if (cover_image)
            uploadData.append('cover_image', cover_image, cover_image.name);
        uploadData.append('description', description);
        uploadData.append('contact_number', phone_number);
        uploadData.append('location', location);
        uploadData.append('service_id', serviceDetail.id);
        uploadData.append('service_name', serviceDetail.title);
        uploadData.append('service_type_id', service_type);
        uploadData.append('service_type_name', service_type);
        uploadData.append('service_category_id', category);
        uploadData.append('service_category_name', category);
        uploadData.append('timeslot', timeslot);
        uploadData.append('email', auth.email);
        uploadData.append('name', auth.name);
        uploadData.append('user', token_detail.user_id);


        // Display the key/value pairs
        for (var pair of uploadData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        try {
            setLoading(true);
            showLoader();

            const config = {
                headers: {
                    'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null,
                    'Content-Type': 'multipart/form-data',
                }
            }
            const res = await axios.post(`${apiEndPoints.baseUrl}` + '/order/save/', uploadData, config);
            if (res.data.status_code == 200) {
                setAlert("Order added successfully.", 'success');
                history.push('/', { from: history.location })
            }
            else {
                setAlert("Failed to add order.", 'error');
            }

            hideLoader();
        } catch (error) {
            console.log(error)
        }

    }

    if (!auth.isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (<div className="container bookingContainer">

        <form onSubmit={(e) => onSubmit(e)}>
            <div className="card">
                <div className="card-body">
                    <h3>Place an order: </h3>
                    <hr />
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Selected Service</h5>
                            <input
                                type="text"
                                className="form-control"
                                name="service_name"
                                placeholder="Service"
                                value={serviceDetail ? serviceDetail.title : ""}
                                readOnly={true}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Full Name</h5>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                value={auth ? auth.name : ""}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Email</h5>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={auth ? auth.email : ""}
                                readOnly={true}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Phone Number</h5>
                            <input
                                type="text"
                                name="phone_number"
                                className="form-control"
                                placeholder="Phone Number"
                                required
                                onChange={(evt) => setPhoneNumber(evt.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Location Details</h5>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                value={location}
                                placeholder="Location"
                                required
                                onChange={(evt) => setLocation(evt.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Select Category</h5>
                            <select id="inputState" className="form-control" name="category" onChange={(evt) => setCategory(evt.target.value)}>
                                <option value="">Choose...</option>
                                {serviceDetail && serviceDetail.categories.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.category_name}</option>
                                    )
                                })}
                            </select>
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Select Service Types</h5>

                            <select id="inputState" className="form-control" name="service_type" onChange={(evt) => setSeviceType(evt.target.value)}>
                                <option value="">Choose...</option>
                                {serviceDetail && serviceDetail.service_types.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <h5 className="card-title">Choose Timeslot</h5>
                            <select id="inputState" className="form-control" required name="timeslot" onChange={(evt) => setTimeSlot(evt.target.value)}>
                                <option value="">Choose...</option>
                                <option value='5am - 6am'>5am - 6am</option>
                                <option value='6am - 7am'>6am - 7am</option>
                                <option value='7am - 8am'>7am - 8am</option>
                                <option value='8am - 9am'>8am - 9am</option>
                                <option value='9am - 10am'>9am - 10am</option>
                                <option value='10am - 11am'>10am - 11am</option>
                                <option value='11am - 12pm'>11am - 12pm</option>
                                <option value='12pm - 1pm'>12pm - 1pm</option>
                                <option value='1pm - 2pm'>1pm - 2pm</option>
                                <option value='2pm - 3pm'>2pm - 3pm</option>
                                <option value='3pm - 4pm'>3pm - 4pm</option>
                                <option value='4pm - 5pm'>4pm - 5pm</option>
                                <option value='5pm - 6pm'>5pm - 6pm</option>
                                <option value='6pm - 7pm'>6pm - 7pm</option>
                                <option value='7pm - 8pm'>7pm - 8pm</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Image</h5>
                            <input
                                type="file"
                                className="form-control"
                                name="cover_image"
                                onChange={(evt) => setCoverImage(evt.target.files[0])}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <h5 className="card-title">Description</h5>
                            <textarea
                                className="form-control"
                                name="description"
                                required
                                onChange={(evt) => setDescription(evt.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        <i className="bx bx-save"></i>  Submit
                        </button>
                </div>
            </div>
        </form>
        {loader}
    </div>);
}

BookNow.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, { setAlert })(withRouter(BookNow));