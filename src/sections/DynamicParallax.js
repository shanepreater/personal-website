import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

const DynamicParallax = ({ image, alt, content }) => {
  const modifier = (1 / 3) * 2;
  const [height, setHeight] = useState(window.innerWidth * modifier);
  useEffect(() => {
    const resizeListener = ev => {
      console.log(ev);
      const newHeight = ev.currentTarget.innerWidth * modifier;

      console.log(`Resetting height to ${newHeight}`);
      setHeight(newHeight);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, [modifier]);

  console.log(`Height is ${height}`);
  return (
    <React.Fragment>
      <section style={{ height: height }} className="d-none d-md-block">
        <Parallax
          strength={100}
          bgImage={image}
          blur={0}
          bgImageAlt={alt}
          style={{ height: height * 0.9 }}
        />
      </section>
      <section className="d-none d-md-block">
        <Parallax className="parallax-cover-section" strength={400}>
          {content}
        </Parallax>
      </section>
      <section className="d-block d-md-none">{content}</section>
    </React.Fragment>
  );
};

export default DynamicParallax;
