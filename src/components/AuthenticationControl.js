import React from "react";
import {connect} from "react-redux";
import {adminSelector, loggedInSelector, userAvatarSelector, userNameSelector} from "../authentication/AuthReducer";
import {Button, Dropdown, Image} from "react-bootstrap";
import {Auth} from "aws-amplify"
import DropdownToggle from "react-bootstrap/DropdownToggle";
import {Link} from "react-router-dom";

const SignedInControls = ({listClass, isAdmin, name, picture, signOut}) => {
    const smallClass = listClass + " navbar-brand-small d-block d-lg-none";
    const largeClass = listClass + " d-none d-lg-block";
    return (
        <React.Fragment>
            {isAdmin && (<li className={smallClass}>
                <Link to="/admin/blog/create">Create Post</Link>
            </li> )}
            <li className={smallClass}>
                <a href="#" onClick={signOut}>Sign out</a>
            </li>
            <li className={largeClass}>
                <Dropdown>
                    <DropdownToggle id="signedInDropLink" variant="link">
                        <Image src={picture.url} roundedCircle/>
                    </DropdownToggle>
                    <Dropdown.Menu>
                        {isAdmin && (<Dropdown.Item as={Link} to="/admin/blog/create">Create Post</Dropdown.Item>)}
                        <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        </React.Fragment>);
};

const SignedOutControls = ({listClass, signIn}) => {
    return (<li className={listClass}><Button variant="link" onClick={signIn}>Sign in</Button></li>);
};

const AuthenticationControl = ({listClass, loggedIn, name, picture, isAdmin}) => {
    const performLogin = evt => {
        evt.preventDefault();
        Auth.federatedSignIn({provider: 'Facebook'})
    };

    const performLogout = evt => {
        evt.preventDefault();
        Auth.signOut();
    };

    if (loggedIn) {
        return (<SignedInControls isAdmin={isAdmin} listClass={listClass} signOut={performLogout} name={name} picture={picture}/>)
    }
    return (<SignedOutControls listClass={listClass} signIn={performLogin}/>)
};

const mapStateToProps = state => ({
    loggedIn: loggedInSelector(state),
    name: userNameSelector(state),
    picture: userAvatarSelector(state),
    isAdmin: adminSelector(state)
});

export default connect(mapStateToProps)(AuthenticationControl);