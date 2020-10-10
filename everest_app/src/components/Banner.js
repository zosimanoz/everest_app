import React from 'react';
import bannerStyles from './styles/Banner.module.css';
import imageFile from './hero-bg.jpg';



const banner = () => (
    <section id="hero" style={{ background: "center center url(" + imageFile + ")" }} className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md" data-aos="fade-up">
            <input type="text" className={bannerStyles.search_section_banner} name="sms_search" id="sms_search" placeholder="Search for our services" />
            <span className={bannerStyles.search_icon_span}><i className="bx bx-search"></i></span>
            <div className="search_items animated fadeIn faster" id="sms_search_items" style={{ padding: "20px 20px" }}></div>
            <h1>Sath <span>Hamro</span></h1>
        </div>
    </section>
)

export default banner;