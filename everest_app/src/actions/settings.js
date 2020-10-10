import {
    SET_SETTINGS
} from './types';

export const setSettings = (data) => dispatch => {
    dispatch({
        type: SET_SETTINGS,
        payload: data
    });
}