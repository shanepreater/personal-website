import React from "react";
import { Alert, Modal, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import {
  feedbackMessageSelector,
  feedbackTitleSelector,
  feedbackTypeSelector,
  hasFeedbackSelector
} from "./feedbackReducer";

const mapStateToProps = state => ({
  title: feedbackTitleSelector(state),
  message: feedbackMessageSelector(state),
  type: feedbackTypeSelector(state),
  showFeedback: hasFeedbackSelector(state)
});

const mapDispatchToProps = dispatch => ({
  closeFeedback: () => dispatch({ type: "clearFeedback" })
});

const Feedback = ({ showFeedback, title, message, type, closeFeedback }) => {
  console.log(showFeedback);
  const rawMessage = {
    __html: message
  };
  return (
    <Modal show={showFeedback} onHide={closeFeedback} className="feedback">
      <Modal.Header>
        <Alert variant={type}>{title}</Alert>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={rawMessage} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
