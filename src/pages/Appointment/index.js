import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import API from "../../API/mainServer";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import appointmentAction from "../../redux/actions/appointmentAction";

import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [psikiaterData, setPsikiaterData] = useState({});
  const [appointment_time, setAppointmentTime] = useState("");
  const [appointment_date, setAppointmentDate] = useState("");
  const [complaint, setComplaint] = useState("");
  const [allergy, setAllergy] = useState("");

  // const [startDate, setStartDate] = useState(new Date());
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user_data);
  const patient_id = dataUser._id;
  // const appointment_date = dataUser.appointment_date;
  // const appointment_time = dataUser.appointment_time;
  const { psikiater_id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const getData = await API({
          url: `/psikiater/${psikiater_id}`,
          method: "GET",
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        });
        setPsikiaterData(getData.data.data);
        console.log(getData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return getData;
  }, []);

  const createAppointmentHandler = (e) => {
    e.preventDefault();
    const accesstoken = localStorage.getItem("accesstoken");
    dispatch(
      appointmentAction.createAppointment(
        complaint,
        allergy,
        accesstoken,
        psikiater_id,
        patient_id,
        appointment_date,
        appointment_time
      )
    );
    const idAppointment = localStorage.getItem("id_appointment");
    console.log(idAppointment);
    history.push(`/checkout-payment/${idAppointment}`);
  };

  const complaintHandler = (e) => {
    setComplaint(e.target.value);
  };
  const appointmentDateHandler = (e) => {
    setAppointmentDate(e.target.value);
  };
  const appointmentTimeHandler = (e) => {
    setAppointmentTime(e.target.value);
  };

  const allergyHandler = (e) => {
    setAllergy(e.target.value);
  };

  // };
  // () => {
  //   const [startDate, setStartDate] = useState(
  //     setHours(setMinutes(new Date(), 30), 16)
  //   );

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Appointment</h1>
      <Container>
        <Row>
          <Col
            sm={12}
            lg={6}
            // style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <h5 style={{ fontWeight: "bold" }}>PSIKIATER DATA</h5>
            <img
              src={`${psikiaterData.avatar_url}`}
              style={{ width: "300px", height: "250px" }}
            ></img>
          </Col>
          <Col>
            <Form style={{ marginTop: "5px" }}>
              <Form.Group>
                <Form.Label>Psikiater Name</Form.Label>
                <Form.Control
                  type="text"
                  value={`${psikiaterData.first_name} ${psikiaterData.last_name} `}
                  readOnly
                ></Form.Control>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={`${psikiaterData?.address}`}
                  readOnly
                ></Form.Control>
                <Form.Label>Fees</Form.Label>
                <Form.Control
                  type="text"
                  value={`${psikiaterData?.fee}`}
                  readOnly
                ></Form.Control>
                <Form.Label>Choose Working Days</Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select">
                  <option>{`${psikiaterData?.work_days}`}</option>
                </Form.Control>
              </Form.Group>
              <Form.Label>Choose Working Hours</Form.Label>
              <Form.Group>
                <Form.Control as="select">
                  <option>{`${psikiaterData?.work_time}`}</option>
                </Form.Control>
              </Form.Group>
              {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                includeTimes={[setHours(setMinutes(new Date(), 0), 17)]}
                dateFormat="MMMM d, yyyy h:mm aa"
              /> */}
              <Form.Group>
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  onChange={appointmentDateHandler}
                  value={appointment_date}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Appointment Time</Form.Label>
                <Form.Control
                  type="time"
                  onChange={appointmentTimeHandler}
                  value={appointment_time}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} lg={6}>
            <Form style={{ marginTop: "30px" }}>
              <h5 style={{ fontWeight: "bold" }}>PATIENT DATA</h5>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={dataUser.first_name}
                    type="text"
                    placeholder="Enter first name here"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={dataUser.last_name}
                    type="text"
                    placeholder="Enter last name here"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Complain</Form.Label>
                <Form.Control
                  onChange={complaintHandler}
                  value={complaint}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Allergy</Form.Label>
                <Form.Control
                  onChange={allergyHandler}
                  value={allergy}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button onClick={createAppointmentHandler} variant="dark">
          Make Appointment
        </Button>
      </Container>
    </div>
  );
};

export default Appointment;
