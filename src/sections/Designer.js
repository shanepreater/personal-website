import React from "react";
import DesignImage from "../static/slider/flowdiagram.jpg"

const Designer = props => {
    return (
        <React.Fragment>
            <section className="section-header">
                <img src={DesignImage} alt="Designing your system"/>
                <h3>Systems design</h3>
                <p>Over the years I have been
                    involved in designing systems for both small
                    and large enterprises. I am well versed in obtaining requirements and providing full system designs
                    to fulfill the customers expectations.</p>
            </section>
            <section>
                <h3>Designing from scratch</h3>
                <p>I can provide the technical oversight to pick the right tools. Providing the rational as to why a
                    given technology would be the best fit for the problem space.</p>
            </section>
        </React.Fragment>
    )
};

export default Designer;