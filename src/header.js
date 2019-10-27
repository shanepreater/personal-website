import React from "react"
import {connect} from "react-redux"
import LogoImage from "./static/mainLogo.png"
import SmallLogoImage from "./static/logo.png"
import {loggedInSelector, userAvatarSelector, userNameSelector} from "./authentication/AuthReducer";
import {Link} from "react-router-dom";
import "./header.scss"
import {Container, Navbar} from "react-bootstrap";

const mapStateToProps = (state, props) => ({
    loggedIn: loggedInSelector(state),
    userName: userNameSelector(state),
    userAvatar: userAvatarSelector(state),

});

const mapDispatchToProps = (dispatch, props) => ({});

const Header = (props) => {
    return (
        <Navbar bg="dark" expand="lg" className="navbar-dark">
            <Container fluid className="navbar-container">
                <Navbar.Brand as={Link} to="/" className="d-none d-md-block">
                    <img src={LogoImage} alt="banner image"/>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-small d-block d-md-none">
                    <img src={SmallLogoImage} alt="banner image"/>
                </Navbar.Brand>
                <div className="horizontal-spacer"/>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav pl-md-5 ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mentor">Mentoring and Training</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/design">Software Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dev">Software Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
