import jwtDecode from 'jwt-decode';
import * as Types from '../actions/types.js';
const init = {
    isAuthenticated: !!localStorage.getItem('token'),
	user: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) :  {},
	error: {}
}

const authReducer = (state=init, action) => {
    switch(action.type){
        case Types.SET_USER: {
            return {
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload,
                error: {}
            }
        }
        case Types.SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}


export default authReducer;