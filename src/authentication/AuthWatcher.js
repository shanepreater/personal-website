import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {obtainCurrentUserDetails, signinListener, obtainUserCredentials} from "../aws/awsAuth";

const AuthWatcher = ({token}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        signinListener(dispatch);
    }, [dispatch]);

    useEffect(() => {
        obtainCurrentUserDetails(dispatch);
    }, [dispatch, token]);

    useEffect(() => {
        obtainUserCredentials(dispatch);
    }, [dispatch]);

    return (
        <React.Fragment/>
    )
};

export default AuthWatcher;