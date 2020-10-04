import React from 'react';

const footer = () => {
    return (
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6 footer-contact">
                            <h3>Contact Us</h3>
                            <p>
                                Everest Repair and Maintanance, Kathmandu, Nepal <br />
                                New Baneswor<br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Blog</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Sign Up</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="mr-md-auto text-center text-md-left">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Everest Repair and Maintanance</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default footer;