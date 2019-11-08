import React from "react";
import DesignImage from "../static/slider/flowdiagram.jpg";

const Designer = props => {
  return (
    <React.Fragment>
      <section className="section-header">
        <img src={DesignImage} alt="Designing your system" />
        <h3>Systems design</h3>
        <p>
          Over the years I have been involved in designing systems for both
          small and large enterprises. I am well versed in obtaining
          requirements and providing full system designs to fulfill the
          customers expectations.
        </p>
      </section>
      <section>
        <h3>Designing from scratch</h3>
        <p>
          I can provide the technical oversight to pick the right tools.
          Providing the rational as to why a given technology would be the best
          fit for the problem space.
        </p>
        <p>
          When designing systems, it's important to plan for vertical /
          horizontal scaling. This is a concept that I have baked into my design
          processes for many years, but it is not always as simple as just
          adding more CPU / RAM (Vertical scaling) or simply chucking more pods
          / instances into the pool (Horizontal scaling). There are the other
          non functional requirements to balance. For example, adding more
          compute resource to the system by way of bigger vCPUs, will not also
          improve the resiliance of the system, conversely, simply adding more
          instances may impact the consistency of the data being manipulated.
        </p>
        <p>
          I am well versed in identifying and combating the inevitable bottle
          necks which form in any reasonably sized system, it's important not to
          optimize too early and measure to see where the bottle necks really
          are. Often designers have added complexity to a system only to find
          that the performance issue that they were addressing did not even
          materialise.
        </p>
        <p>
          Consistent and stable interfaces are the corner stone of the modern
          microservices world, having a reliable API is key to making good
          progress when multiple teams are working on inter connected services.
          During my career as a systems design expert, this has been a major
          factor in the success of the project.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Designer;
