import React from "react";
import {Animated} from "react-animated-css";
import {Col, Media} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MediaArea = ({logo, icon, name, content, md=6, lg=4}) => {
    let mediaImage = null;
    if(logo) {
        mediaImage = (<img src={logo} className="company" alt={name}/>)
    } else if(icon) {
        mediaImage = (<FontAwesomeIcon icon={icon} className="media-icon"/>)
    }
    return (<Col md={md} lg={lg}>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Media className="d-block text-center">
                {mediaImage}
                <Media.Body>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </Animated>
    </Col>)
};

export default MediaArea;