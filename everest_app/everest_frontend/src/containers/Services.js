import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { withRouter } from "react-router";
import { SEO } from '../components';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import useFullPageLoader from '../hooks/useFullPageLoader';
import { Link } from 'react-router-dom';


const Services = (props) => {

    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(false);

    const [loader, showLoader, hideLoader] = useFullPageLoader();
    let arr = [], size = 3;

    useEffect(() => {
        getServices();
    }, [])

    const getServices = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/services/all/');
            setServices(res.data.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const renderRows = () => {

        let arrServices = [...services];

        while (arrServices.length > 0) {
            arr.push(arrServices.splice(0, size))
        }

        return arr.map((item, idx) => {
            return (
                <div key={idx} className="row portfolio-container">
                    {
                        item.map((rowItem) => {
                            return (<div key={rowItem.id} className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src={`${apiEndPoints.siteUrl + rowItem.thumb_image_path}`} className="img-fluid" alt="" />
                                        <Link to={`/service/${rowItem.slug}`} className="link-details" title="More Details"><i className="bx bx-link"></i></Link>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><Link to={`/service/${rowItem.slug}`}>{rowItem.title}</Link></h4>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            )

        })

    }

    return (
        <section id="portfolio" className="portfolio">
            <SEO title="Services" />
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our most popular servicess</p>
                </div>
                {services && renderRows()}
            </div>

            {loader}

        </section>
    );
}

export default withRouter(Services);