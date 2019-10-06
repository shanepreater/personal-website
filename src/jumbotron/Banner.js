import React from 'react'
import Collapse from "react-bootstrap/Collapse";
import Jumbotron from "react-bootstrap/Jumbotron";
import JumboImage from "../static/jumbotron.png"
import {jumbotronSelector} from "./JumboReducer";
import "./Banner.scss"
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    showJumbo: jumbotronSelector(state)
})

const mapDispatchToProps = dispatch => ({
    closeJumbotron: () => {
        dispatch({
            type: "JUMBO/VISIBLE/HIDE"
        })
    }
})

const Banner = ({showJumbo, closeJumbotron}) => {
    return (<Collapse in={showJumbo}>
            <Jumbotron>
                <h3>
                    <img src={JumboImage} className="jumbotron-image"/>
                </h3>
                <p>Exciting things go here.</p>
                <div className="align-content-end">
                    <Button onClick={closeJumbotron}>Close</Button>
                </div>
            </Jumbotron>
        </Collapse>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner)