import React from "react";
import BookshelfImage from "../static/slider/bookshelf.jpg";
import resourceItems from "../static/resources"
import AmazonImage from "../components/AmazonImage";

const Resources = props => {
    return (
        <>
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
                            <a target="_blank" href={resource.link}>
                                <h4>{resource.name}</h4>
                            </a>
                            {!!resource.amazonImage && (
                                <AmazonImage image={resource.amazonImage} alt={resource.name}/>)}
                            {!!resource.image && (
                                <a target="_blank" href={resource.link}>
                                    <img src={resource.image} alt={resource.name} style={resource.imageStyle}/>
                                </a>
                            )}
                            <p>{resource.description}</p>
                        </div>
                    )
                })}
            </section>
            <section className="section-footer">
                <p>This list gets updated quite often so please come back soon and see what's new.</p>
            </section>
        </>
    )
};

export default Resources;