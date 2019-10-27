import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Footer.scss"
import {Container} from "react-bootstrap";

const Footer = (props) => {
    return (
        <footer className="site-footer" role="contentinfo">
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
                            <li><a href="#">About</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Disclaimers</a></li>
                            <li><a href="#">Contact</a></li>
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