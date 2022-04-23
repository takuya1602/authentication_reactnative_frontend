import {
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,

    EDIT_USER_INFO_SUCCESS,
    EDIT_USER_INFO_FAIL,

    SET_USER_LOADING,
    REMOVE_USER_LOADING,
} from "../actions/types";


const initialState = {
    userLoading: false,
    username: null,
    email: null,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USER_LOADING:
            return {
                ...state,
                userLoading: true,
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                username: payload.username,
                email: payload.email,
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
            }
        case EDIT_USER_INFO_SUCCESS:
            return {
                ...state,
                username: payload.username,
                email: payload.email,
            };
        case EDIT_USER_INFO_FAIL:
            return {
                ...state,
            };
        case REMOVE_USER_LOADING:
            return {
                ...state,
                userLoading: false,
            };
        default:
            return state;
    }
}

export default userReducer;