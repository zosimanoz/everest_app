import React, { useEffect, useState, Fragment } from 'react';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import useFullPageLoader from '../hooks/useFullPageLoader';
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams, withRouter } from "react-router";


const BlogDetail = () => {

    const [loading, setLoading] = useState(false);
    const [blogDetail, setBlogDetail] = useState(null);

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const routeParams = useParams();

    useEffect(() => {
        getBlogDetails()
    }, [])


    const getBlogDetails = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/blog/' + `${routeParams.slug}/detail/`);
            setBlogDetail(res.data.data);
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
                        <img src={blogDetail && apiEndPoints.siteUrl + blogDetail.cover_image_path} className="portfolio-img-fluid" alt="" />
                    </div>
                    <div className="portfolio-description">
                        <div className="row">
                            <div className="col-md-8" style={{ paddingTop: '50px' }}>
                                <h1>{blogDetail && blogDetail.title}</h1>

                                <p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blogDetail && blogDetail.content
                                        }}></div>
                                </p>
                            </div>
                            <div className="col-md-4" style={{ paddingTop: '65px' }}>
                                <div className="card my-4">
                                    <h5 className="card-header">Categories</h5>
                                    <div className="card-body">
                                        <div className="row">
                                            {blogDetail && blogDetail.tags.split(",").map((item)=>{
                                                return <span className="badge badge-primary" style={{marginLeft: '15px'}}>{item}</span>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {loader}
        </Fragment>
    );
}

export default BlogDetail;