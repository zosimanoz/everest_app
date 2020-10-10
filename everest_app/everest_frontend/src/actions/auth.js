import axios from 'axios';
import {
    SIGNUP_FAIL,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT, REFRESH_TOKEN
} from './types';
import { setAlert } from './alert';
import { apiEndPoints } from '../utils/apiconfig';

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${apiEndPoints.baseUrl}` + '/token/', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('Authenticated successfully', 'success'));
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });
        dispatch(setAlert('Error authenticating', 'error'));
    }
}


export const signup = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2 });

    try {
        const res = await axios.post(`${apiEndPoints.baseUrl}` + '/accounts/signup/', body, config);

        if (res.data.error) {
            dispatch(setAlert(res.data.error, 'error'))
            return;
        }

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(email, password));
    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL
        });
        dispatch(setAlert('Error creating account', 'error'));
    }
}


export const logout = () => dispatch => {
    dispatch(setAlert('Logout success', 'success'));
    dispatch({
        type: LOGOUT
    });
}

export const refreshAuthToken = (payload) => dispatch => {
    dispatch({
        type: REFRESH_TOKEN,
        payload: payload
    });
}