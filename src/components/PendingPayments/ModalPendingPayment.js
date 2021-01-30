import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import "./ModalPendingPayment.css";

const ModalPendingPayment = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Product Detail</h4>
        {props.data.map((item) => {
          return (
            <div>
              <Row>
                <Col>
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control
                    id="modal-pending-payment-form-control"
                    value={`${item.product_detail.patient_id.first_name} ${item.product_detail.patient_id.last_name}`}
                  />
                </Col>
                <Col>
                  <Form.Label>Psychiatrist Detail</Form.Label>
                  <Form.Control
                    id="modal-pending-payment-form-control"
                    value={`${item.product_detail.psikiater_id.first_name} ${item.product_detail.psikiater_id.last_name}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Appointment Date</Form.Label>
                  <Form.Control
                    id="modal-pending-payment-form-control"
                    value={moment(item.product_detail.appointment_date).format(
                      "DD MMMM YYYY"
                    )}
                  />
                </Col>
                <Col>
                  <Form.Label>Appointment Time</Form.Label>
                  <Form.Control
                    id="modal-pending-payment-form-control"
                    value={item.product_detail.appointment_time}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-pending-payment-button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPendingPayment;
