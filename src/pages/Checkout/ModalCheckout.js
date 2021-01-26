import { Modal, Button } from "react-bootstrap";
import './ModalCheckout.css'

function paymentMethodModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Please Choose Payment Method</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-checkout-modal" variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default paymentMethodModal;
