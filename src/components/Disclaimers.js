import React from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import TradingDisclaimer from "./TradingDisclaimer";

const Disclaimers = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Disclaimers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="content" id="disclaimer-tabs">
          <Tab eventKey="trading" title="Trading">
            <div className="disclaimer">
              <TradingDisclaimer />
            </div>
          </Tab>
          <Tab eventKey="content" title="Site Content">
            <div className="disclaimer">
              <h4>Website</h4>
              <p>
                The information contained in this website is for general
                information purposes only. The information is provided by the
                owner (Shane Preater) and while we endeavour to keep the
                information up to date and correct, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability or availability
                with respect to the website or the information, products,
                services, or related graphics contained on the website for any
                purpose. Any reliance you place on such information is therefore
                strictly at your own risk.
              </p>
              <p>
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of, or in connection with, the use of this
                website.
              </p>
              <h4>Blog posts</h4>
              <p>
                This is a personal blog. Any views or opinions represented in
                this blog are personal and belong solely to the blog owner
                (Shane Preater) and do not represent those of people,
                institutions or organizations that the owner may or may not be
                associated with in professional or personal capacity, unless
                explicitly stated. Any views or opinions are not intended to
                malign any religion, ethnic group, club, organization, company,
                or individual.
              </p>
              <p>
                All content provided on this blog is for informational purposes
                only. Although best efforts are made to ensure accuracy at the
                time of publishing, the owner of this blog makes no
                representations as to the accuracy or completeness of any
                information on this site or found by following any link on this
                site. The owner will not be liable for any errors or omissions
                in this information nor for the availability of this
                information. The owner will not be liable for any losses,
                injuries, or damages from the display or use of this
                information.
              </p>
            </div>
          </Tab>
          <Tab eventKey="general" title="General">
            <div className="disclaimer">
              <h4>Using this website</h4>
              <p>
                Through this website you are able to link to other websites
                which are not under the control of the owner. We have no control
                over the nature, content and availability of those sites. The
                inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>
              <p>
                Every effort is made to keep the website up and running
                smoothly. However, [business name] takes no responsibility for,
                and will not be liable for, the website being temporarily
                unavailable due to technical issues beyond our control.
              </p>
              <sub>Images used on the site:</sub>
              <sub>
                <a href="https://www.freepik.com/free-photos-vectors/business">
                  Business photo created by yanalya - www.freepik.com
                </a>
              </sub>
              <sub>
                <a href="https://www.freepik.com/free-photos-vectors/vintage">
                  Vintage photo created by freepik - www.freepik.com
                </a>
              </sub>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Disclaimers;
