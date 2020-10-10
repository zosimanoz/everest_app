import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => {
    toast.configure({
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });

    if(alert.alertType == 'success')
        return toast.success(alert.msg)
    else if(alert.alertType == 'error')
        return toast.error(alert.msg)
    else 
        return toast.info(alert.msg)
})


const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);