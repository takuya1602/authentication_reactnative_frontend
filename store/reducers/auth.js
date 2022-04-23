import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,

    GET_STORED_TOKEN_SUCCESS,
    GET_STORED_TOKEN_FAIL,
    NO_STORED_TOKEN,

    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,

    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,

    EDIT_USER_INFO_SUCCESS,
    EDIT_USER_INFO_FAIL,
    SET_USER_LOADING,
    REMOVE_USER_LOADING,
} from "../actions/types"

const initialState = {
    authLoading: false,
    userLoading: false,
    token: null,
    username: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                authLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload, // data.key
            }
        case LOGIN_FAIL:
            return {
                ...state
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
            }
        case LOGOUT_FAIL:
            return {
                ...state,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                token: payload, //data.key
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
            }
        case GET_STORED_TOKEN_SUCCESS:
            return {
                ...state,
                token: payload,
            }
        case NO_STORED_TOKEN:
            return {
                ...state,
            }
        case GET_STORED_TOKEN_FAIL:
            return {
                ...state,
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                authLoading: false,
            }
        case SET_USER_LOADING:
            return {
                ...state,
                userLoading: true,
            }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                username: payload.username,
                email: payload.email,
            }
        case GET_USER_INFO_FAIL:
            return {
                ...state,
            }
        case EDIT_USER_INFO_SUCCESS:
            return {
                ...state,
                username: payload.username,
                email: payload.email,
            }
        case EDIT_USER_INFO_FAIL:
            return {
                ...state,
            }
        case REMOVE_USER_LOADING:
            return {
                ...state,
                userLoading: false,
            }
        default:
            return state
    }
}

export default authReducer