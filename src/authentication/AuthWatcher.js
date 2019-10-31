import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {obtainCurrentUserDetails, signinListener} from "./awsAuth";

const AuthWatcher = ({token}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        signinListener(dispatch);
    }, [dispatch]);

    useEffect(() => {
        obtainCurrentUserDetails(dispatch);
    }, [dispatch, token]);

    return (
        <React.Fragment/>
    )
};

export default AuthWatcher;