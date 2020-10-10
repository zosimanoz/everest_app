import React from 'react';

const WhyChooseUs = () => {
    return (
        <section id="what-we-do" className="what-we-do">
        <div className="container">
  
          <div className="section-title">
            <h2>Why Choose Us ?</h2>
            <p>We can deliver timely service for your satisfaction</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4><a href="">Professionals with years of experience</a></h4>
                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file"></i></div>
                <h4><a href="">Guaranteed Satisfaction</a></h4>
                {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p> */}
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4><a href="">Service at your doorstep</a></h4>
                {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default WhyChooseUs;