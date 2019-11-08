import React from "react";
import BookshelfImage from "../static/slider/bookshelf.jpg";
import resourceItems from "../static/resources"
import AmazonImage from "../components/AmazonImage";

const Resources = ({}) => {
    return (
        <React.Fragment>
            <section className="section-header">
                <img src={BookshelfImage} alt="Some interesting resources"/>
                <h3>Useful Resources</h3>
                <p>Over my career I have used / created various resources which could be useful to my clients. Some of
                    these are listed below:</p>
            </section>
            <section>
                {resourceItems.map((resource, index) => {
                    return (
                        <div key={index} className="resource-item">
                            <a href={resource.link}>
                                <h4>{resource.name}</h4>
                                {!!resource.amazonImage && (
                                    <AmazonImage image={resource.amazonImage} alt={resource.name}/>)}
                                {!!resource.image && (
                                    <img src={resource.image} alt={resource.name}/>
                                )}
                            </a>
                            <p>{resource.description}</p>
                        </div>
                    )
                })}
            </section>
        </React.Fragment>
    )
};

export default Resources;