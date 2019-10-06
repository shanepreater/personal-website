const InitialState = {
    userDetails: null
};

/**
 * Authentication reducer
 * @param {Map} state The original state
 * @param {Object} action The action being applied
 * @returns {Map} The updated state
 */
export const authReducer = (state = InitialState, action) => {
    return {...state}
}

/**
 * Selectors
 */

const userDetailsSelector = state => {
    return state.auth.userDetails
}

export const loggedInSelector = state => {
    const userDetails = userDetailsSelector(state)
    return userDetails !== null
}

export const userNameSelector = state => {
    const userDetails = userDetailsSelector(state)
    if(userDetails === null) {
        return ""
    }
    return userDetails.name
}

export const userAvatarSelector = state => {
    const userDetails = userDetailsSelector(state)
    if(userDetails === null) {
        return null
    }
    return userDetails.avatar
}