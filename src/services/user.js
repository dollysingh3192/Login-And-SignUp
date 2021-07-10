import config from "../constants";
import { setRegisterMessage } from '../slice/register';
import { setLoginMessage } from '../slice/login';
import { setLoader } from '../slice/loader';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function registerService(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/user/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.error) || (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const newRegister = (user) => {
    return async (dispatch) => {
        dispatch(setLoader(true));
        try {
            await registerService(user);
            dispatch(setRegisterMessage('Registration successful, Please login!'));
        } catch (error) {
            dispatch(setRegisterMessage(error.toString()));
        } finally {
            dispatch(setLoader(false));
        }
    };
};

function loginService(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/api/user/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // history.push('/dashboard')
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(setLoader(true));
        try {
            await loginService(email, password);
            return true;
        } catch (error) {
            dispatch(setLoginMessage(error.toString()));
        } finally {
            dispatch(setLoader(false));
        }
    };
}
