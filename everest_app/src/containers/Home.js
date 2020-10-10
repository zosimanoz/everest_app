import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Banner, HowWeWork, WhyChooseUs, HappyClients, Testimonials, SEO, TopServices } from './../components';
import { Services } from './index';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import useFullPageLoader from '../hooks/useFullPageLoader';

const Home = ({ auth }) => {
    const [services, setServices] = useState([])
    const [clients, setClients] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(false);

    const[loader, showLoader, hideLoader] = useFullPageLoader();

    useEffect(()=>{
        getClients();
        getTestimonials();
        getServices();
    },[])


    const getServices = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}`+ '/services/all/');
            setServices(res.data.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const getClients = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}`+'/clients/all/');
            setClients(res.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const getTestimonials = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}`+'/clients/testimonials/');
            setTestimonials(res.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    return (    
        <Fragment>
            <SEO title="Home" />

            <Banner />
            <TopServices dataItems={services}/>
            <HowWeWork />
            <HappyClients dataItems={clients}/>
            <WhyChooseUs />
            <Testimonials dataItems={testimonials}/>

            {loader}
        </Fragment>
    )
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home);