import {adaptUserResponse} from "../aws/awsAuth";

const InitialState = {
    awsAuth: null,
    userDetails: null,
    groups: []
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
    },
    "credentials/received": (state, action) => {
        const groups = action.groups;
        console.log(groups);
        return {...state, groups}
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

export const userGroupsSelector = state => {
    return state.auth.groups;
};

export const adminSelector = state => {
    const groups = userGroupsSelector(state);
    if(groups) {
        return groups.indexOf("website_admin") >= 0;
    }
    return false;
}