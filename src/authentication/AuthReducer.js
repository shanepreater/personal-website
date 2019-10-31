import {adaptUserResponse} from "./awsAuth";

const InitialState = {
    awsAuth: null,
    userDetails: null
};

const handlerMap = {
    "auth/signin": (state, action) => {
        console.log(action.user);
        return {...state, awsAuth: action.user};
    },
    "auth/signout": (state, action) => {
        return {
            ...state,
            userDetails: null,
            awsAuth: null
        };
    },
    "userDetails/received": (state, action) => {
        const responseDetails = action.userDetails;
        const userDetails = responseDetails ? adaptUserResponse(responseDetails) : null;
        return {...state, userDetails}
    }
};

/**
 * Authentication reducer
 * @param {Map} state The original state
 * @param {Object} action The action being applied
 * @returns {Map} The updated state
 */
export const authReducer = (state = InitialState, action) => {
    const handler = handlerMap[action.type];
    if (handler) {
        return handler(state, action);
    }

    const awsAuth = localStorage.getItem("awsAuth");
    return {...state, awsAuth};
};

/**
 * Selectors
 */

export const userDetailsSelector = state => {
    return state.auth.userDetails;
};

export const loggedInSelector = state => {
    const userDetails = userDetailsSelector(state);
    return userDetails !== null;
};

export const userNameSelector = state => {
    const userDetails = userDetailsSelector(state);
    if (userDetails === null) {
        return "";
    }
    return userDetails.name;
};

export const userAvatarSelector = state => {
    const userDetails = userDetailsSelector(state);
    if (userDetails === null) {
        return null;
    }
    return userDetails.avatar;
};