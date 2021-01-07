import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import API from "../../API/mainServer";
import moment from "moment";
import "./checkout.css";
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
  const history = useHistory();
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
    history.push("/patient-history");
    swal("Checkout Sukses!", "", "success");
  };

  return (
    <div>
      <Container>
        <Jumbotron className="jumbotron-checkout">
          <Row>
            <Col className="column-kiri">
              <img
                className="checkout-image"
                src={appointment?.psikiater_id?.avatar_url}
              ></img>
            </Col>
            <Col className="column-kanan" sm={12} lg={6}>
              <Container>
                <Form className="form-checkout-wrapper">
                  <Form.Group controlId="formPsikiaterName">
                    <Form.Label>
                      <b>Psikiater</b>
                    </Form.Label>
                    <Form.Control
                      className="form-psikiater"
                      type="text"
                      value={`${appointment?.psikiater_id?.first_name} ${appointment?.psikiater_id?.last_name}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPatientName">
                    <Form.Label>
                      <b>Patient</b>
                    </Form.Label>
                    <Form.Control
                      className="form-patient"
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
                      className="form-schedule"
                      type="text"
                      value={`${moment(appointment?.appointment_date).format(
                        "YYYY MMM DD"
                      )} - ${appointment?.appointment_time}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Container>
            </Col>
          </Row>
        </Jumbotron>
        <Card className="card-checkout-wrapper">
          <Card.Header>
            <b className="header-card-payment">TOTAL PAYMENT</b>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-card-payment">
              {appointment?.psikiater_id?.fees}
            </Card.Text>
          </Card.Body>
        </Card>
        <Container className="button-wrapper">
          <Button
            className="button-checkout"
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
