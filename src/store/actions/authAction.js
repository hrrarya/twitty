import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import * as Types from './types.js';

export const login = (user, history) => dispatch => {
    Axios.post("http://localhost:8080/api/users/login", user)
        .then((res) => {
            if(res.status!==200) throw  new Error("Something wrong happened.");

            let token = `Bearer ${res.data.token}`;
            localStorage.setItem('token', token);
            Axios.defaults.headers.Authorization = token;
            let decode = jwtDecode(token);

            dispatch({
                type: Types.SET_USER,
                payload: decode
            });

            history.push("/home");
        }).catch(err => {
            dispatch({
                type: Types.SET_ERROR,
                payload: "error occured."
            })
        })
    // console.log(user);
}


export const register = (user, history) => dispatch => {
    Axios.post("http://localhost:8080/api/users/register", user)
        .then(res => {
            if(res.status !== 201) throw new Error("Something wrong happened");

            alert("Account created succesfully");

            history.push('/login');

        })
        .catch(err => {
            console.log(err);
        });
}