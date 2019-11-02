import React from "react"
import LogoImage from "./static/mainLogo.png"
import SmallLogoImage from "./static/logo.png"
import {Link} from "react-router-dom";
import "./header.scss"
import {Button, Container, Navbar} from "react-bootstrap";
import AuthenticationControl from "./components/AuthenticationControl";

const Header = ({showContact}) => {
    return (
        <Navbar bg="dark" expand="lg" className="navbar-dark">
            <Container fluid className="navbar-container">
                <Navbar.Brand as={Link} to="/" className="d-none d-md-block">
                    <img src={LogoImage} alt="banner"/>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-small d-block d-md-none">
                    <img src={SmallLogoImage} alt="banner"/>
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
                            <Button variant="link" className="nav-link" onClick={showContact}>Contact</Button>
                        </li>
                        <AuthenticationControl listClass="nav-item"/>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;