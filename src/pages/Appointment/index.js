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
import appointmentAction from "../../redux/actions/appointmentAction";
import TimePicker from "react-time-picker";

const Appointment = () => {
  const [psikiaterData, setPsikiaterData] = useState({});
  const [appointment_time, setAppointmentTime] = useState("");
  const [appointment_date, setAppointmentDate] = useState("");
  const [complaint, setComplaint] = useState("");
  const [allergy, setAllergy] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user_data);
  const patient_id = dataUser._id;
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

  const getIdCallback = (id) => {
    history.push(`/checkout-payment/${id}`);
  };

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
        appointment_time,
        getIdCallback
      )
    );
  };

  const complaintHandler = (e) => {
    setComplaint(e.target.value);
  };
  const appointmentDateHandler = (e) => {
    setAppointmentDate(e.target.value);
  };
  const appointmentTimeHandler = (e) => {
    console.log(e.target.value);
    setAppointmentTime(e.target.value);
    console.log(appointment_time);
  };

  const allergyHandler = (e) => {
    setAllergy(e.target.value);
  };

  return (
    <div>
      <h1
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#70a1ff",
        }}
      >
        Appointment
      </h1>
      <Container>
        <Container style={{ backgroundColor: "#ff6b81", padding: "50px" }}>
          <h5
            style={{
              fontWeight: "bold",
              color: "white",
              marginLeft: "70px",
              textAlign: "center",
            }}
          >
            PSIKIATER DATA
          </h5>
          <Row>
            <Col xs={12} lg={6}>
              <img
                src={`${psikiaterData.avatar_url}`}
                style={{ width: "300px", height: "300px", marginTop: "30px" }}
              ></img>
            </Col>
            <Col>
              <Form
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                <Form.Group>
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                    <b>Psikiater Name</b>
                  </Form.Label>
                  <Form.Control
                    style={{
                      textAlign: "center",
                      marginBottom: "30px",
                    }}
                    type="text"
                    value={`${psikiaterData.first_name} ${psikiaterData.last_name} `}
                    readOnly
                  ></Form.Control>
                  <Form.Label style={{ color: "white" }}>
                    <b>Address</b>
                  </Form.Label>
                  <Form.Control
                    style={{ textAlign: "center", marginBottom: "30px" }}
                    type="text"
                    value={`${psikiaterData?.work_address}`}
                    readOnly
                  ></Form.Control>
                  <Form.Label style={{ color: "white" }}>
                    <b>Fees</b>
                  </Form.Label>
                  <Form.Control
                    style={{ textAlign: "center" }}
                    type="text"
                    value={`${psikiaterData?.fees}`}
                    readOnly
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            backgroundColor: "#70a1ff",
            padding: "40px",
          }}
        >
          <Row>
            <Col>
              <Form style={{ marginTop: "30px", textAlign: "center" }}>
                <h5
                  style={{
                    fontWeight: "bold",
                    marginBottom: "40px",
                    color: "white",
                  }}
                >
                  PATIENT DATA
                </h5>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>
                      <b style={{ color: "white" }}>First Name</b>
                    </Form.Label>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      value={dataUser.first_name}
                      type="text"
                      placeholder="Enter first name here"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>
                      <b style={{ color: "white" }}>Last Name</b>
                    </Form.Label>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      value={dataUser.last_name}
                      type="text"
                      placeholder="Enter last name here"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <Form.Group
                    style={{ marginRight: "20px", marginTop: "20px" }}
                  >
                    <Form.Label style={{ color: "white" }}>
                      Appointment Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      onChange={appointmentDateHandler}
                      value={appointment_date}
                    ></Form.Control>
                  </Form.Group>

                  <TimePicker
                    onChange={(v) => {
                      setAppointmentTime(v);
                    }}
                    value={appointment_time}
                  />
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{ marginTop: "30px" }}>
                    <b style={{ color: "white" }}>Complain</b>
                  </Form.Label>
                  <Form.Control
                    onChange={complaintHandler}
                    value={complaint}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{ marginTop: "30px" }}>
                    <b style={{ color: "white" }}>Allergy</b>
                  </Form.Label>
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
          <Button
            style={{
              backgroundColor: "#ff6b81",
              marginTop: "40px",
            }}
            onClick={createAppointmentHandler}
            variant="dark"
          >
            Make Appointment
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Appointment;
