import {
    SET_SETTINGS, CLEAR_SETTINGS
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case SET_SETTINGS:
            return [...state, payload]
        case CLEAR_SETTINGS:
            return state
        default:
            return state;
    }

}