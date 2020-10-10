import axios from 'axios';
var jwtDecoder = require('jwt-decode');

function decodeToken() {
    const token = localStorage.getItem('token');
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export default decodeToken;
