import React from 'react';

const services = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our most popular servicess</p>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="link-preview venobox" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 1</a></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-2.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 2</a></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-3.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 3</a></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="link-preview venobox" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 1</a></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-2.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 2</a></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                <a href="assets/img/portfolio/portfolio-3.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
                            </figure>

                            <div className="portfolio-info">
                                <h4><a href="portfolio-details.html">Service 3</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default services;