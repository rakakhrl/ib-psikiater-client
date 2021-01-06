import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import API from "../../API/mainServer";
import moment from "moment";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import appointmentAction from "../../redux/actions/appointmentAction";

function Checkout() {
  const [appointment, setAppointment] = useState({});
  const { appointment_id } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  console.log(appointment_id);
  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    const getData = async () => {
      try {
        const appointment = await API({
          method: "GET",
          url: `/appointments/${appointment_id}`,
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        });

        setAppointment(appointment.data.data);
        console.log(appointment.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();

    return getData;
  }, []);

  const checkoutButtonHandler = () => {
    dispatch(
      appointmentAction.changeStatusAppointment(
        "Paid",
        appointment._id,
        localStorage.getItem("accesstoken")
      )
    );

    swal("Checkout Sukses!", "", "success");
  };

  return (
    <div>
      <Container>
        <Jumbotron
          style={{
            marginTop: "5%",
            textAlign: "center",
            backgroundColor: "#ff4757",
            color: "white",
          }}
        >
          <Row>
            <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img
                style={{
                  marginTop: "30px",
                  maxWidth: "250px",
                  maxHeight: "230px",
                }}
                src={appointment?.psikiater_id?.avatar_url}
              ></img>
            </Col>
            <Col
              sm={12}
              lg={6}
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Container>
                <Form style={{ marginTop: "30px" }}>
                  <Form.Group controlId="formPsikiaterName">
                    <Form.Label>
                      <b style={{ color: "white" }}>Psikiater</b>
                    </Form.Label>
                    <Form.Control
                      style={{
                        textAlign: "center",
                        backgroundColor: "#70a1ff",
                      }}
                      type="text"
                      value={`${appointment?.psikiater_id?.first_name} ${appointment?.psikiater_id?.last_name}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPatientName">
                    <Form.Label>
                      <b style={{ color: "white" }}>Patient</b>
                    </Form.Label>
                    <Form.Control
                      style={{
                        textAlign: "center",
                        backgroundColor: "#70a1ff",
                      }}
                      type="text"
                      value={`${appointment?.patient_id?.first_name} ${appointment?.patient_id?.last_name}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formScheduledAppointment">
                    <Form.Label>
                      <b style={{ color: "white" }}>Schedule</b>
                    </Form.Label>
                    <Form.Control
                      style={{
                        textAlign: "center",
                        backgroundColor: "#70a1ff",
                      }}
                      type="text"
                      value={`${moment(appointment?.appointment_date).format(
                        "YYYY, MMM, DD"
                      )} ${appointment?.appointment_time}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Container>
            </Col>
          </Row>
        </Jumbotron>
        <Card
          style={{
            backgroundColor: "#2ed573",
            width: "17rem",
            height: "10rem",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Header>
            <b style={{ color: "#ffffff" }}>TOTAL PAYMENT</b>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: "#ffffff" }}>
              {appointment?.psikiater_id?.fees}
            </Card.Text>
          </Card.Body>
        </Card>
        <Container
          style={{
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              margin: "auto",
            }}
            variant="dark"
            onClick={checkoutButtonHandler}
          >
            CHECKOUT
          </Button>
        </Container>
      </Container>
    </div>
  );
}
export default Checkout;
