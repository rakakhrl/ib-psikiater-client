import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./CancelModal.css";

function CancelModal(props) {
  const history = useHistory();

  const yesButton = () => {
    history.push("/search-result");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-body">
        <h4>Are you sure want to cancel appointment?</h4>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button id="button" variant="dark" onClick={yesButton}>
          Yes
        </Button>
        <Button id="button" className="close-button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancelModal;
