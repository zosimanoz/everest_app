import React, { Fragment, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import postscribe from 'postscribe';

const Footer = ({ settings }) => {

    const chatInstance = useRef(null);
 
    useEffect(() => {
        if (settings) {

            const elem = document.createElement('script');
            elem.text = settings.custom_footer_script;
            chatInstance.current.appendChild(elem);
            
            return () => {
                chatInstance.current.removeChild(elem);
            }
        }

    }, [settings]);

    
    return (
        <Fragment>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 footer-contact">
                                <h3>Contact Us</h3>
                                <p>
                                    {settings && settings.brand_name} <br />
                                New Baneswor<br />
                                    <strong>Phone:</strong> {settings && settings.contact_number1}<br />
                                    <strong>Email:</strong> {settings && settings.email}<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/blog">Blog</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/signup">Sign Up</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            &copy; Copyright <strong><span>{settings && settings.copyright_text}</span></strong>. All Rights Reserved
                    </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href={settings && settings.youtube_url} className="youtube"><i className="bx bxl-youtube"></i></a>
                        <a href={settings && settings.facebook_url} className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href={settings && settings.twitter_url} className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href={settings && settings.instagram_url} className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>

                </div>
            </footer>
             <div ref={chatInstance} />
        </Fragment>
    );
}

export default Footer;