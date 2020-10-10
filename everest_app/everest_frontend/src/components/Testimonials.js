import React from 'react';
import Slider from "react-slick";

const testimonials = ({dataItems }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };

    const renderItems = () => {
        return dataItems.map((item)=> {
            return(<div key={item.id}>
                <div className="testimonial-item">
                    <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {item.message}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={item.profile_image} className="testimonial-img round-border" alt="" />
                    <h3>{item.name}</h3>
                    <h4>Designation</h4>
                </div>
            </div>)
        })
    }

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>What our clients say ?</h2>
                    <p>Customers we have delievered our service and satisfied</p>
                </div>
                {dataItems ? <Slider {...settings}>{renderItems()}</Slider> : <div className="text-center">No testimonials</div>}
            </div>
        </section>
    );
}

export default testimonials;