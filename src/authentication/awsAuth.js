import {Auth, Hub} from "aws-amplify"

export const signinListener = dispatch => {
    Hub.listen("auth", ({payload: {event, data}}) => {
        if (event === "signIn") {
            console.log("Sign in success");
            localStorage.setItem("awsAuth", JSON.stringify(data));
            dispatch(
                {
                    type: "auth/signin",
                    user: data
                });
        } else if (event === "signOut") {
            localStorage.removeItem("awsAuth");
            dispatch({type: "auth/signout"});
        }
    });
};

export const obtainCurrentUserDetails = async dispatch => {
    const userDetails = await Auth.currentUserInfo();
    console.log(userDetails);
    dispatch({type:"userDetails/received", userDetails});
};

export const adaptUserResponse = response => {
    console.log(response);
    const {id, username, attributes: {name, email, picture,  identities}} = response;
    console.log(picture);
    const avatar = JSON.parse(picture).data;
    return {id, username, name, email, picture, avatar};
};

export const requireSignIn = async (dispatch, userSelector, setErrorMessages) => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        dispatch({type: "auth/signin", user});
    } catch (e) {
        setErrorMessages(e.errors);
    }
};