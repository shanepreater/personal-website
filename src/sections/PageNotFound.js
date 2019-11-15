import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PageNotFound = props => {
  return (
    <>
      <section className="section">
        <h3><FontAwesomeIcon icon="exclamation-circle" /> Houston we have a problem</h3>
        <p>
          I am sorry but the resource you were looking for doesn't appear to exist.
        </p>
        <p>Please check the address and try again.</p>
      </section>
    </>
  );
};

export default PageNotFound;
