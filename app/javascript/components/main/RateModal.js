import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const RateModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        keyboard={ false }
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Youve Rated This Movie!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            What would you like to do next?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/">Go Home</Button>
          <Button href="/movie-ratings">View Table</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RateModal;