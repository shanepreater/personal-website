import React from 'react'
import {connect} from "react-redux";
import CodingImage from "../static/slider/code.jpg"
import DesignImage from "../static/slider/flowdiagram.jpg"
import MentoringImage from "../static/slider/mentoring03.jpg"
import {Link} from "react-router-dom";
import {Carousel, Col, Row} from "react-bootstrap";
import "./Banner.css"

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    closeJumbotron: () => {
        dispatch({
            type: "JUMBO/VISIBLE/HIDE"
        })
    }
})

const carouselItems = [{
    image: MentoringImage,
    synopsis: "Mentoring your team",
    content: "As a developement expert, I am well versed in training and mentoring teams.",
    link: "/mentor"
}, {
    image: DesignImage,
    synopsis: "Designing your systems",
    content: "Over 15 years experience in designing systems of varying complexity",
    link: "/design"
}, {
    image: CodingImage,
    synopsis: "Developing to your requirements",
    content: "I am a polymath when it comes to programming, capable of expert development in a number of different languages",
    link: "/dev"
}]

const Banner = ({showJumbo, closeJumbotron}) => {
    return (
        <section className="home-slider">
            <Row noGutters>
                <Col>
                    <Carousel>
                        {carouselItems.map((ci, index) => {
                            return (<Carousel.Item key={index} className="slider-item">
                                <img src={ci.image} alt="carousel item" className="slider-image"/>
                                <Carousel.Caption>
                                    <h3>{ci.synopsis}</h3>
                                    <p>{ci.content}</p>
                                    <p><Link to={ci.link} className="btn btn-primary">Learn more</Link>
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                        })}
                    </Carousel>
                </Col>
            </Row>
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner)