import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import { Helmet } from 'react-helmet';

const SEO = ({ title }) => {

    const [seoSettings, setSeoSettings] = useState()

    useEffect(() => {
        getSeoSettings()
    }, [])

    const getSeoSettings = async () => {
        try {
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/settings/seo/');
            setSeoSettings(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Helmet
            title={`Everest Repair and Maintainance | ${title}`}
            meta={[
                {
                    name: `description`,
                    content: seoSettings ? seoSettings.meta_descriptions : "Everest Repair and Maintainance Services",
                },
                {
                    name: `keywords`,
                    content: seoSettings ? seoSettings.meta_keywords : "Everest, Repair,Maintainance,Services",
                },
                {
                    property: `og:title`,
                    content: seoSettings ? seoSettings.meta_title : "Everest Repair and Maintainance Services",
                },
                {
                    property: `og:description`,
                    content: seoSettings ? seoSettings.meta_description : "Everest Repair and Maintainance Services",
                },
                {
                    property: `og:type`,
                    content: `website`,
                }
            ]}
        />
    );
}

SEO.propTypes = {
    title: PropTypes.string.isRequired
}

export default SEO;