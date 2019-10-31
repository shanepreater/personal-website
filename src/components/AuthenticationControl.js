import React from "react";
import {connect} from "react-redux";
import {loggedInSelector, userAvatarSelector, userNameSelector} from "../authentication/AuthReducer";
import {Button, Dropdown, Image} from "react-bootstrap";
import {Auth} from "aws-amplify"
import DropdownToggle from "react-bootstrap/DropdownToggle";

const SignedInControls = ({listClass, name, picture, signOut}) => {
    return (
        <li className={listClass}>
            <Dropdown>
                <DropdownToggle id="signedInDropLink" variant="link">
                    <Image src={picture.url} roundedCircle/>
                </DropdownToggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>);
};

const SignedOutControls = ({listClass, signIn}) => {
    return (<li className={listClass}><Button variant="link" onClick={() => signIn()}>Sign in</Button></li>);
};

const AuthenticationControl = ({listClass, loggedIn, name, picture, OAuthSignIn, OAuthSignOut}) => {
    const performLogin = () => {
        Auth.federatedSignIn({provider: 'Facebook'})
    };

    const performLogout = () => {
        Auth.signOut();
    };

    if (loggedIn) {
        return (<SignedInControls listClass={listClass} signOut={performLogout} name={name} picture={picture}/>)
    }
    return (<SignedOutControls listClass={listClass} signIn={performLogin}/>)
};

const mapStateToProps = state => ({
    loggedIn: loggedInSelector(state),
    name: userNameSelector(state),
    picture: userAvatarSelector(state)
});

export default connect(mapStateToProps)(AuthenticationControl);