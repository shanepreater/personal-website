import { Auth, Hub } from "aws-amplify";

export const signinListener = dispatch => {
  Hub.listen("auth", ({ payload }) => {
    console.log(payload);
    const event = payload.event;
    const data = payload.data;
    if (event === "signIn") {
      console.log("Sign in success");
      localStorage.setItem("awsAuth", JSON.stringify(data));
      dispatch({
        type: "auth/signin",
        user: data
      });
    } else if (event === "signOut") {
      localStorage.removeItem("awsAuth");
      dispatch({ type: "auth/signout" });
    }
  });
};

export const obtainCurrentUserDetails = async dispatch => {
  const userDetails = await Auth.currentUserInfo();
  dispatch({ type: "userDetails/received", userDetails });
};

export const obtainUserCredentials = async dispatch => {
  try {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const { accessToken } = cognitoUser.getSignInUserSession();
    dispatch({
      type: "credentials/received",
      groups: accessToken.payload["cognito:groups"]
    });
  } catch (e) {
    dispatch({
      type: "error",
      title: "Error getting user details",
      errors: e.errors
    });
  }
};

export const adaptUserResponse = response => {
  const {
    id,
    username,
    attributes: { name, email, picture, identities }
  } = response;
  const avatar = JSON.parse(picture).data;
  return {
    id,
    username,
    name,
    email,
    picture,
    avatar,
    identities: JSON.parse(identities)
  };
};

export const requireSignIn = async (
  dispatch,
  userSelector,
  setErrorMessages
) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    dispatch({ type: "auth/signin", user });
  } catch (e) {
    setErrorMessages(e.errors);
  }
};
