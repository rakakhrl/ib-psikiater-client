import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
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
  };

  return (
    <div>
      <Container>
        <Jumbotron style={{ marginTop: "5%" }}>
          <Row>
            <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img
                style={{
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
                    <Form.Label>Psikiater</Form.Label>
                    <Form.Control
                      type="text"
                      value={`${dummyData.psikiater_id.first_name} ${dummyData.psikiater_id.last_name}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPatientName">
                    <Form.Label>Patient</Form.Label>
                    <Form.Control
                      type="text"
                      value={`${dummyData.patient_id.first_name} ${dummyData.patient_id.last_name}`}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Container>
            </Col>
          </Row>
        </Jumbotron>
        <Card
          className="container"
          style={{
            width: "17rem",
            height: "10rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card.Header>TOTAL PAYMENT</Card.Header>
          <Card.Body>
            <Card.Text>{dummyData.psikiater_id.fees}</Card.Text>
          </Card.Body>
        </Card>
        <Button onClick={checkoutButtonHandler} variant="dark">
          CHECKOUT
        </Button>
      </Container>
    </div>
  );
}
export default Checkout;
