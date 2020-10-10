import React, { Fragment } from 'react';
import styles from './styles/HowWeWork.module.css';

const howWeWork = () => (
    <Fragment>

        <div id="services" className="container">

            <div className="section-title">
                <h2>How we work ?</h2>
                <p>This is how we serve your demands</p>
            </div>


            <div className="row services section-bg">
                <div className="col-md-6">
                    <div className="icon-box">
                        <i className="icofont-computer"></i>
                        <h4><span className={styles.spanText}>Step One</span>: Search service based on your requirements</h4>
                        {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p> */}
                    </div>
                </div>
                <div className="col-md-6 mt-4 mt-lg-0">
                    <div className="icon-box">
                        <i className="icofont-chart-bar-graph"></i>
                        <h4><span className={styles.spanText}>Step Two</span>: Inform us through website or phone call</h4>
                        {/* <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p> */}
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="icon-box">
                        <i className="icofont-image"></i>
                        <h4><span className={styles.spanText}>Step Three</span>: We will search right professional to help you</h4>
                        {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p> */}
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="icon-box">
                        <i className="icofont-settings"></i>
                        <h4><span className={styles.spanText}>Step Four</span>: Just relax our professional to your door and do the work</h4>
                        {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default howWeWork;