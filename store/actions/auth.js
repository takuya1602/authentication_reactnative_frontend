import * as SecureStore from 'expo-secure-store'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,

    GET_STORED_TOKEN_SUCCESS,
    NO_STORED_TOKEN,
    GET_STORED_TOKEN_FAIL,

    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,

    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,

    EDIT_USER_INFO_SUCCESS,
    EDIT_USER_INFO_FAIL,

    SET_USER_LOADING,
    REMOVE_USER_LOADING,
} from "./types"

import { API_URL } from "@env"

export const login = (username, password) => async (dispatch) => {
    dispatch({
        type: SET_AUTH_LOADING,
    });

    try {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        const res = await fetch(`${API_URL}/dj-rest-auth/login/`, config);
        const data = await res.json();

        if (res.status === 200) {
            await SecureStore.setItemAsync("token", data.key);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.key,
            });
        } else {
            dispatch({
                type: LOGIN_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
    dispatch({
        type: REMOVE_AUTH_LOADING,
    });
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: SET_AUTH_LOADING,
    });

    try {
        const res = await fetch(`${API_URL}/dj-rest-auth/logout/`, {
            method: "POST",
        });

        if (res.status === 200) {
            await SecureStore.deleteItemAsync("token")
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL,
        });
    }
    dispatch({
        type: REMOVE_AUTH_LOADING,
    });
}

export const getToken = () => async (dispatch) => {
    console.log("getToken() is called.")
    dispatch({
        type: SET_AUTH_LOADING,
    });

    try {
        const token = await SecureStore.getItemAsync("token");

        if (token) {
            dispatch({
                type: GET_STORED_TOKEN_SUCCESS,
                payload: token,
            });
        } else {
            dispatch({
                type: NO_STORED_TOKEN,
            });
        }
    } catch (err) {
        dispatch({
            type: GET_STORED_TOKEN_FAIL,
        });
    }
    dispatch({
        type: REMOVE_AUTH_LOADING,
    });
}

export const signup = (username, email, password1, password2) => async (dispatch) => {
    console.log("signup() is called")
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password1: password1,
                password2: password2,
            }),
        }
        const res = await fetch(`${API_URL}/dj-rest-auth/registration/`, config);
        const data = await res.json();

        if (res.status === 200) {
            await SecureStore.setItemAsync("token", data.key);
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: data.key
            });
        } else {
            dispatch({
                type: SIGN_UP_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: SIGN_UP_FAIL,
        });
    }
    dispatch({
        type: REMOVE_AUTH_LOADING,
    });
}

export const getUserInfo = (token) => async (dispatch) => {
    console.log("getUserInfo() is called.")
    dispatch({
        type: SET_USER_LOADING,
    });

    try {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        }
        const res = await fetch(`${API_URL}/dj-rest-auth/user/`, config);
        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: GET_USER_INFO_SUCCESS,
                payload: data, // pk, username, email, first_name, last_name
            });
        } else {
            dispatch({
                type: GET_USER_INFO_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: GET_USER_INFO_FAIL,
        })
    }
    dispatch({
        type: REMOVE_USER_LOADING,
    });
}

export const editUserInfo = (username, email, token) => async (dispatch) => {
    dispatch({
        type: SET_USER_LOADING,
    })

    try {
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify({
                username: username,
                email: email,
            })
        }
        const res = await fetch(`${API_URL}/dj-rest-auth/user/`, config);
        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: EDIT_USER_INFO_SUCCESS,
                payload: data,
            });
        } else {
            dispatch({
                type: EDIT_USER_INFO_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: EDIT_USER_INFO_FAIL,
        });
    }
    dispatch({
        type: REMOVE_USER_LOADING,
    });
}