import "./Appointment.css";
import Calendar from "react-calendar";
import API from "../../API/mainServer";
import ReactLoading from "react-loading";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import appointmentAction from "../../redux/actions/appointmentAction";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

const Appointment = () => {
  const [psikiaterData, setPsikiaterData] = useState({});
  const [appointment_time, setAppointmentTime] = useState("");
  const [appointment_date, setAppointmentDate] = useState("");
  const [complaint, setComplaint] = useState("");
  const [allergy, setAllergy] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [isButtonDisabled, setisButtonDisabled] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user_data);
  const patient_id = dataUser._id;
  const { psikiater_id } = useParams();
  // const [value, onChange] = useState(new Date());

  console.log(isButtonDisabled);

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
        setIsLoading(false);
        setPsikiaterData(getData.data.data);
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
        appointment_date,
        appointment_time,
        sessionType,
        accesstoken,
        psikiater_id,
        patient_id,
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
  const appointmentTimeHandler = (time) => {
    setAppointmentTime(time);
  };

  const allergyHandler = (e) => {
    setAllergy(e.target.value);
  };

  const cancelButton = () => {
    history.push("/search-result");
  };

  const sessionTypeHandler = (e) => {
    setSessionType(e.target.value);
  };

  const disabledButtonHandler = (isDisabled) => {
    setisButtonDisabled(isDisabled);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title className="pop-over" as="h3">
        Nice! You've Choose Time Schedule For Your Appointment
      </Popover.Title>
    </Popover>
  );

  return (
    <>
      {isLoading ? (
        <div>
          <ReactLoading
            className="react-loading"
            delay={1}
            type={"balls"}
            color={"grey"}
          />
        </div>
      ) : (
        <div>
          <h2 className="page-title">Appointment</h2>

          <Container className="page-wrapper">
            <Card className="psikiater-card-wrapper">
              <Row className="row-1">
                <Col className="column-row-1-wrapper" md={12} lg={6}>
                  <Row>
                    <Col className="column-image" md={12} lg={6}>
                      <Image
                        className="psikiater-avatar"
                        src={`${psikiaterData?.avatar_url}`}
                        roundedCircle
                      ></Image>
                    </Col>
                    <Col
                      column-psikiater-info
                      md={12}
                      lg={6}
                      className="psikiater-info"
                    >
                      <h5>{`Name : ${psikiaterData?.first_name} ${psikiaterData?.last_name}`}</h5>
                      <h5>{`Address : ${psikiaterData?.work_address}`}</h5>
                      <h5>{`Specialized In : Relationship`}</h5>
                      <h5>{`Experience : ${psikiaterData?.info?.experience_year}`}</h5>
                    </Col>
                  </Row>
                </Col>
                <Col className="column-calendar" md={12} lg={6}>
                  <Calendar className="calendar-border" />
                </Col>
              </Row>

              <Row className="row-2">
                <Col className="column-psikiater-schedule">
                  <h5 className="psikiater-time-schedule-title">
                    <b>Psikiater Time Schedule</b>
                  </h5>
                  {psikiaterData?.schedule?.work_time.length === 0 ? (
                    <Button>Psikiater doesn't have schedule yet</Button>
                  ) : (
                    psikiaterData?.schedule?.work_time.map((item) => {
                      return (
                        <OverlayTrigger
                          trigger="click"
                          placement="top"
                          overlay={popover}
                        >
                          <Button
                            onClick={() => appointmentTimeHandler(item)}
                            onClick={() => disabledButtonHandler(true)}
                            disabled={isButtonDisabled}
                            className="psikiater-schedule-button"
                          >
                            {item}
                          </Button>
                        </OverlayTrigger>
                      );
                    })
                  )}
                </Col>
                <Col>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control
                        onChange={(v) => sessionTypeHandler(v)}
                        className="form-session-type"
                        as="select"
                      >
                        <option>Select Session Type</option>
                        <option>Offline</option>
                        <option>Online</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>

              <Row className="row-3">
                <Col lg={6}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      <b>COMPLAINTS</b>
                    </Form.Label>
                    <Form.Control
                      className="form-complaints"
                      as="textarea"
                      rows={3}
                      placeholder="How do you feel?"
                      onChange={complaintHandler}
                      value={complaint}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>
                      <b>ALLERGIES</b>
                    </Form.Label>
                    <Form.Control
                      className="form-allergies"
                      as="textarea"
                      rows={3}
                      type="text"
                      placeholder="e.g Fish Oil"
                      onChange={allergyHandler}
                      value={allergy}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="row-4">
                <Container className="button-wrapper">
                  <Button
                    onClick={cancelButton}
                    variant="dark"
                    className="cancel-button"
                  >{`< Cancel`}</Button>
                  <Button
                    onClick={createAppointmentHandler}
                    className="continue-button"
                  >{`Continue >`}</Button>
                </Container>
              </Row>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};

export default Appointment;

// Code Yang Lama Buat Contekan hehe

{
  /* <div>
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
          <Col xs={12} lg={4}>
            <Image
              className="psikiater-image"
              src={`${psikiaterData.avatar_url}`}
              roundedCircle
            ></Image>
          </Col>
          <Col lg={3}>
            <h5>{`${psikiaterData.first_name} ${psikiaterData.last_name}`}</h5>
            <h5>Ratings : 5/5</h5>
            <h5>Specialized In : Relationship Counceling</h5>
          </Col>
          <Col lg={5}>
            <Calendar />
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
                <Form.Group style={{ marginRight: "20px", marginTop: "20px" }}>
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
      </Container> */
}
// </div>
