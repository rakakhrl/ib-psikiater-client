import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { changeStatusCheckout } from "../../redux/actions/appointmentAction";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // Where the data pass from previous route is kept
  console.log(location.state);

  const dummyData = {
    _id: 123,
    psikiater_id: {
      first_name: "Naufal",
      last_name: "Fachri",
      avatar_url:
        "https://www.pngkey.com/png/full/14-142665_crying-pepe-png-pepe-cry-png.png",
      fees: "Rp 2.000.000",
      work_schedule: ["Monday"],
      work_time: ["13.00 PM - 13.45 PM"],
    },
    patient_id: {
      first_name: "Jajang",
      last_name: "Ramlan",
    },
  };

  const checkoutButtonHandler = () => {
    dispatch(
      changeStatusCheckout(
        "Paid",
        dummyData._id, //props.location.state
        localStorage.getItem("accesstoken")
      )
    );
    history.push("/");
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
                src={dummyData.psikiater_id.avatar_url}
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
                      value={`${dummyData.psikiater_id.first_name} ${dummyData.psikiater_id.last_name}`}
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
                      value={`${dummyData.patient_id.first_name} ${dummyData.patient_id.last_name}`}
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
                      value={`${dummyData.psikiater_id.work_schedule},  ${dummyData.psikiater_id.work_time}`}
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
              {dummyData.psikiater_id.fees}
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
