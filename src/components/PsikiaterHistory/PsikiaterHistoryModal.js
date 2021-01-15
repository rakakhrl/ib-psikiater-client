import { Modal } from "react-bootstrap";
import moment from "moment";
import "./PsikiaterHistoryModal.css";

function PsikiaterHistoryModal(props) {
  return (
    <div className="modal-wrapper">
      <Modal
        className="modal"
        style={{ textAlign: "center" }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-title" id="modal-title">
            Patient Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h5>
            <b>Gender : </b>
            {`${props.appointment.patient_id.gender}`}
          </h5>
          <h5>
            <b>Address : </b> {`${props.appointment.patient_id.address}`}
          </h5>
          <h5>
            <b>Date Of Birth : </b>
            {`${moment(props.appointment.patient_id.date_of_birth).format(
              "DD MMM YYYY"
            )}`}
          </h5>
          <h5>
            <b>Allergy : </b>
            {`${props.appointment.allergy}`}
          </h5>

          <br />
          <hr />
          <br />

          <h5>
            <b>Complaint : </b>
            {`${props.appointment.complaint}`}
          </h5>
          <h5>
            <b>Diagnose :</b>
            {`${props.appointment.diagnose.diagnose_name}`}
          </h5>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default PsikiaterHistoryModal;
