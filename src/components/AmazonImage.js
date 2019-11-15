import React from "react";

const AmazonImage = ({image, alt}) => {
    if (image.src) {
        return (
            <>
                <iframe title={alt} style={image.inlineStyle} marginWidth="0" marginHeight="0" scrolling="no"
                        frameBorder="0"
                        src={image.src}>
                </iframe>
            </>
        );
    } else {
        return (<>
                <a target="_blank"
                   href={image.href}>
                    <img border="0"
                         src={image.imageSrc}/>
                </a>
                <img src={image.trackingSrc} width="1"
                     height="1" border="0" alt="" style={image.inlineStyle}/>
            </>
        );
    }
};

export default AmazonImage;
