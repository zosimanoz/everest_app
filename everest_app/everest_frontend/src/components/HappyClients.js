import React from 'react';
import Slider from "react-slick";

const happyClients = ({ dataItems }) => {

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
                    <a href={item.client_website} target="_blank"><img src={item.logo} className="testimonial-img" alt="" /></a>
                </div>
            </div>)
        })
    }

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Our Happy Customers</h2>
                    <p>Customers we have delievered our service and satisfied</p>
                </div>
                {dataItems ? <Slider {...settings}>{renderItems()}</Slider> : <div className="text-center">No clients</div>}
            </div>
        </section>
    );
}

export default happyClients;