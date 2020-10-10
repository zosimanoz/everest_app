import React, { useEffect, useState } from 'react';
import { Alert, Footer, Navbar } from '../components';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { setSettings } from '../actions/settings';

const Layout = (props) => {
    const [configSettings, setConfigSettings] = useState();
    const history = useHistory();

    useEffect(() => {
        getConfigs()
    }, []);

    const getConfigs = async () => {
        try {
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/settings/config/');
            setConfigSettings(res.data[0]);
            props.setSettings(res.data[0]);
        } catch (error) {
            console.log(error)
        }
    }

    history.listen(location => {
      ReactGA.initialize(configSettings && configSettings.google_analytics_appid);
      ReactGA.set({ page: location.pathname }); 
      ReactGA.pageview(location.pathname);
    });

    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/jpg" href={configSettings ? configSettings.favicon : ''} sizes="16x16" />
            </Helmet>
            <Navbar settings={configSettings} />
            <div style={{ marginTop: '70px' }}>
                {props.children}
            </div>
            <Footer settings={configSettings} />
            <Alert />
        </div>
    )
}

export default connect(null, { setSettings })(Layout);