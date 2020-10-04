import React from 'react';
import Slider from "react-slick";

const happyClients = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Our Happy Customers</h2>
                    <p>Customers we have delievered our service and satisfied</p>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/Unilever.svg.png" className="testimonial-img" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/CG_logo.jpg" className="testimonial-img" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/Unilever.svg.png" className="testimonial-img" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/CG_logo.jpg" className="testimonial-img" alt="" />
                        </div>
                    </div>

                </Slider>
            </div>
        </section>
    );
}

export default happyClients;