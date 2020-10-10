import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useLocation, withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { SEO } from '../components';
import { apiEndPoints } from '../utils/apiconfig';

const topServices = (props) => {

    let dataItems = props.dataItems ? [...props.dataItems] : null;

    let arr = [], size = 3;

    const gotoLogin = () => {
        props.history.push('/login', { from: props.history.location })
    }

    const renderRows = () => {

        while (dataItems.length > 0) {
            arr.push(dataItems.splice(0, size))
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

    return(
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our most popular servicess</p>
                </div>
                {dataItems && renderRows()}
            </div>
        </section>
    );
}

export default withRouter(topServices);