import React from "react";
import {Toast} from "react-bootstrap";

export const ErrorToast = ({errorTitle, errorList, setErrorList}) => {
    return (
        <Toast show={errorList.length > 0} onClose={() => setErrorList([])} style={{
            position: 'absolute',
            top: window.innerHeight / 2,
            right: window.innerWidth / 2,
        }}>
            <Toast.Header>
                <strong className="mr-auto">{errorTitle}</strong>
                <small>{new Date().toLocaleTimeString()}</small>
            </Toast.Header>
            <Toast.Body>
                <p>The following errors have been reported:</p>
                <ul>{errorList.map((err, idx) => (<li key={idx}>{err.message}</li>))}</ul>
            </Toast.Body>
        </Toast>
    )
}