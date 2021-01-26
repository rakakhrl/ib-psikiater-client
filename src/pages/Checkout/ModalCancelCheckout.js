import { Modal, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import './ModalCancelCheckout.css'

function CancelModal(props) {
    const history = useHistory();

  const yesButton = () => {
    history.goBack();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Are You Sure Want To Cancel?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancel-button-checkout-modal" onClick={yesButton}>Yes</Button>
        <Button className="close-button-checkout-modal" variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CancelModal;
