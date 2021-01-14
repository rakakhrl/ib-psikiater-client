import { Modal } from "react-bootstrap";
import moment from "moment";

function PsikiaterHistoryModal(props) {
  console.log(props.appointment);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title" id="modal-title">
          Patient Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{` Complaint : ${props.appointment.complaint}`}</h5>
        <h5>{` Diagnose : ${props.appointment.diagnose.diagnose_name}`}</h5>
        <hr />
        <h5>{` Gender : ${props.appointment.patient_id.gender}`}</h5>
        <h5>{` Address : ${props.appointment.patient_id.address}`}</h5>
        <h5>{` Date Of Birth : ${moment(
          props.appointment.patient_id.date_of_birth
        ).format("DD MMM YYYY")}`}</h5>
        <h5>{`Allergy : ${props.appointment.allergy}`}</h5>
      </Modal.Body>
    </Modal>
  );
}
export default PsikiaterHistoryModal;
