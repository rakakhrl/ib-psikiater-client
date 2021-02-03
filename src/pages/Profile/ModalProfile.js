import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userAction from "../../redux/actions/userAction";
import swal from "sweetalert";
import "./ModalProfile.css";

function ModalPsikiater(props) {
  console.log(props);
  const [workDays, setWorkDays] = useState(
    props.psikiater.schedule.work_days.join(", ")
  );
  const [workTimes, setWorkTimes] = useState(
    props.psikiater.schedule.work_time.join(", ")
  );

  const accesstoken = localStorage.getItem("accesstoken");
  const psikiater = useSelector((store) => store.user.user_data);
  const psikiater_id = psikiater._id;
  const dispatch = useDispatch();

  const updateButtonHandler = () => {
    dispatch(
      userAction.changePsikiaterSchedule(
        psikiater_id,
        accesstoken,
        workDays.split(", "),
        workTimes.split(", "),
        props.onHide
      )
    );
    props.callback();
    swal("Schedule Updated!", "", "success");
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 className="modal-profile-page-title">Input Your New Schedule</h4>
        <Form.Group className="mb-3">
          <Form.Label>Work Days</Form.Label>
          <Form.Control
            value={workDays}
            onChange={(e) => setWorkDays(e.target.value)}
            placeholder="Input Your Work Days"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Work Times</Form.Label>
          <Form.Control
            value={workTimes}
            onChange={(e) => setWorkTimes(e.target.value)}
            placeholder="Input Your Work Times"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={updateButtonHandler}>
          Update
        </Button>
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalPsikiater;
