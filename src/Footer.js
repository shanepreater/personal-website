import React, {useState} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Footer.scss"
import {Button, Container} from "react-bootstrap";
import Disclaimers from "./components/Disclaimers";
import ContactUs from "./components/ContactUs";

const Footer = (props) => {
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    return (
        <footer className="site-footer" role="contentinfo">
            <Disclaimers setShow={setShowDisclaimer} show={showDisclaimer}/>
            <Container fluid>
                <Row>
                    <Col sm={6} md={7}>
                        <h3>Contact info</h3>
                        <ul className="list-unstyled">
                            <li className="d-block">
                                <span className="text-capitalize">Address:</span>&nbsp;
                                <span>Midsomer Norton, Bath, United Kingdom</span></li>
                            <li className="d-block">
                                <span className="text-capitalize">Telephone:</span>&nbsp;
                                <span>+4420 3289 3323</span>
                            </li>
                        </ul>
                        <ul className="list-unstyled footer-link d-flex">
                            <li><a href="mailto:info@shanepreater.dev"><FontAwesomeIcon icon="at"/></a></li>
                            <li><a href="https://twitter.com/PreaterShane" className="p-2"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
                            <li><a href="https://www.linkedin.com/in/shanepreater/" className="p-2"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></li>
                        </ul>

                    </Col>
                    <Col sm={0} md={1} lg={3} className="col"></Col>
                    <Col sm={6} md={4} lg={2}>
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled footer-link">
                            <li><li><Button variant="link" className="nav-link" onClick={() => setShowDisclaimer(true)}>Terms of use</Button></li></li>
                            <li><Button variant="link" className="nav-link" onClick={() => setShowDisclaimer(true)}>Disclaimers</Button></li>
                            <li><Button variant="link" className="nav-link" onClick={props.showContact}>Contact</Button></li>
                        </ul>
                    </Col>
                    <div className="col-md-3">

                    </div>
                </Row>
                <Row>
                    <Col className="col-12 text-md-center text-left">
                        <p> Copyright &copy; 2019 All rights reserved Designed by Shane Preater </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer