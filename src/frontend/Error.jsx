import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Error (props) {
  // eslint-disable-next-line react/prop-types
  const { show, handleCloseError, message } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseError}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Error;
