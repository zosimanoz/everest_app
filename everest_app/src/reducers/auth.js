import {
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REFRESH_TOKEN
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    refresh_token: localStorage.getItem('refresh_token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    loading: false
};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            localStorage.setItem('refresh_token', payload.refresh);
            localStorage.setItem('name', payload.name);
            localStorage.setItem('email', payload.email);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access,
                refresh_token: payload.refresh,
                email: payload.email,
                name: payload.name
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT: {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                refresh_token: null,
                loading: false,
                email: null,
                name: null
            }
        }
        case REFRESH_TOKEN: {
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access,
                refresh_token: payload.refresh,
                email: localStorage.getItem('email'),
                name: localStorage.getItem('name')
            }
        }
        default:
            return state

    }
}

