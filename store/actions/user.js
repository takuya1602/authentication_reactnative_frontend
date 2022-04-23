import {
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,

    EDIT_USER_INFO_SUCCESS,
    EDIT_USER_INFO_FAIL,

    SET_USER_LOADING,
    REMOVE_USER_LOADING,
} from "./types";

import { API_URL } from "@env";

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