import React from "react"
import LogoImage from "./static/logo.png"
import {connect} from "react-redux";
import {loggedInSelector, userAvatarSelector, userNameSelector} from "./authentication/AuthReducer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";

const mapStateToProps = (state, props) => ({
    loggedIn: loggedInSelector(state),
    userName: userNameSelector(state),
    userAvatar: userAvatarSelector(state),

})

const mapDispatchToProps = (dispatch, props) => ({})

const Header = (props) => {
    return (
        <Navbar id="main-header" expand="md" fixed="top" className="bg-dark">
            <Navbar.Brand as={Link} to="/"><img src={LogoImage} className="title-logo"
                                        alt="Shane Preater - Software consultant and DevOps Professional"/></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <NavDropdown.Item as={Link} to="/">About Me</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mentor">Mentoring and Training</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/design">Systems Design</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/dev">Software Development</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle >
                <p>Hello?</p>
            </Navbar.Toggle>
        </Navbar>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)