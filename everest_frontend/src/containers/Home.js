import React, { Fragment } from 'react';
import { Banner, HowWeWork, WhyChooseUs, HappyClients, Testimonials } from './../components';
import { Services } from './index';

const home = () => (
    <Fragment>
        <Banner />
        <Services />
        <HowWeWork />
        <HappyClients />
        <WhyChooseUs />
        <Testimonials />
    </Fragment>
)

export default home;