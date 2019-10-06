import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

const Footer = (props) => {
    return (
        <Navbar id="main-footer" fixed="bottom">
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <p>Contact me and stuff here!</p>
                    </Col>
                    <Col md={4}/>
                    <Col md={4} className="align-end">
                        <p>More contact details here</p>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Footer