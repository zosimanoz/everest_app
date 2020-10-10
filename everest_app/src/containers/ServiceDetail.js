import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams, withRouter } from "react-router";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useFullPageLoader from '../hooks/useFullPageLoader';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import { Modal, Button } from 'react-bootstrap';

const ServiceDetail = ({ auth, history }) => {

    const [loading, setLoading] = useState(false);
    const [serviceDetail, setServiceDetail] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const routeParams = useParams();

    useEffect(() => {
        getServiceDetails()
    }, [])


    const getServiceDetails = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/services/detail/' + `${routeParams.slug}`);
            console.log(res)
            setServiceDetail(res.data.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const gotoLogin = () => {
        setLoading(true);
        showLoader();
        setTimeout(() => {
            hideLoader();
            history.push('/login', { from: history.location })
        }, 300);
    }

    const ShowPriceModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Pricings
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: '100%' }} src={serviceDetail && apiEndPoints.siteUrl + serviceDetail.pricing_image_path} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const guestUserBooking = (
        <Fragment>
            <a href="#" className="round-btn btn-danger" style={{ textDecoration: 'none' }} onClick={gotoLogin}><i className="bx bx-book"></i> Book Now</a>
            <a href="#" onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }} className="round-btn btn-primary"><i className="bx bx-cart"></i>  View Pricings </a>
        </Fragment>
    )

    const authUserBooking = (
        <Fragment>
            <Link to={`/service/${routeParams.slug}/order`} style={{ textDecoration: 'none' }} className="round-btn btn-danger"><i className="bx bx-cart"></i>  Proceed to Booking</Link>
            <a href="#" onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }} className="round-btn btn-primary"><i className="bx bx-money"></i>  View Pricings </a>
        </Fragment>
    )


    return (
        <Fragment>
            <section className="portfolio-div">
                <div className="container">
                    <div className="portfolio-details-container">
                        <img src={serviceDetail && apiEndPoints.siteUrl + serviceDetail.cover_image_path} className="portfolio-img-fluid" alt="" />
                    </div>
                    <div className="portfolio-description">
                        <div className="row">
                            <div className="col-md-8" style={{ paddingTop: '50px' }}>
                                <h1>{serviceDetail && serviceDetail.title}</h1>

                                <p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: serviceDetail && serviceDetail.description
                                        }}></div>
                                </p>

                                {serviceDetail && serviceDetail.offerings.length > 0 && (
                                    <Fragment>
                                        <h3>Offerings</h3>
                                        <ul style={{ margin: '15px', padding: '0px' }}>
                                            {serviceDetail.offerings.map((item) => {
                                                return (
                                                    <li>{item.title}</li>
                                                )
                                            })}
                                        </ul>
                                    </Fragment>
                                )}
                            </div>
                            <div className="col-md-4" style={{ paddingTop: '65px', textAlign: 'right' }}>
                                {!auth.loading && (<Fragment>{auth.isAuthenticated ? authUserBooking : guestUserBooking}</Fragment>)}
                                {/* <div className="info">
                                    <p>Minimum visit price: {serviceDetail && serviceDetail.minimum_visit_price}</p>
                                    <p>Contact Numbers: </p>
                                </div> */}
                            </div>
                        </div>

                    </div>

                </div>

                <ShowPriceModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </section>
            {loader}
        </Fragment>
    );
}



ServiceDetail.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps)(withRouter(ServiceDetail));