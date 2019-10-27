import React from "react";
import DynamicParallax from "./DynamicParallax";
import DesignImage from "../static/slider/flowdiagram.jpg"

const Designer = props => {
    return (
        <React.Fragment>
            <DynamicParallax image={DesignImage} alt="Designing your system" content={(
                <div><h3>Systems design</h3><p>Over the years I have been involved in designing systems for both small
                    and large enterprises. I am well versed in obtaining requirements and providing full system designs
                    to fulfill the customers expectations.</p></div>)}/>
            <section>
                <h3>Designing from scratch</h3>
                <p>I can provide the technical oversight to pick the right tools. Providing the rational as to why a
                    given technology would be the best fit for the problem space.</p>
            </section>
        </React.Fragment>
    )
};

export default Designer;