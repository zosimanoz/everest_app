import React, { useEffect, useState, Fragment } from 'react';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import useFullPageLoader from '../hooks/useFullPageLoader';
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams, withRouter } from "react-router";

const About = () => {

    const [loading, setLoading] = useState(false);
    const [aboutUs, setAboutUs] = useState(null);

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    useEffect(() => {
        getAboutUsContent()
    }, [])


    const getAboutUsContent = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/page/about-us/');
            setAboutUs(res.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Fragment>
            <section className="portfolio-div">
                <div className="container">
                    <div className="portfolio-details-container">
                        <img src={aboutUs && aboutUs.banner_img_path} className="portfolio-img-fluid" alt="" />
                    </div>
                    <div className="portfolio-description">
                        <div className="row">
                            <div className="col-md-12" style={{ paddingTop: '50px' }}>
                                <h1>{aboutUs && aboutUs.title}</h1>

                                <p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: aboutUs && aboutUs.content
                                        }}></div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {loader}
        </Fragment>
    )
}

export default About;