import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import API from "../../API/mainServer";
import moment from "moment";
import "./checkout.css";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import appointmentAction from "../../redux/actions/appointmentAction";

function Checkout() {
  const [payment, setPayment] = useState();
  const { payment_id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const currencyFormatter = require("currency-formatter");
  const [isDisabled, setIsDisabled] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    console.log(paymentMethod);
    console.log(isDisabled);
  });

  useEffect(() => {
    const getCheckoutPaymentData = async () => {
      try {
        const response = await API({
          url: `/payments/${payment_id}`,
          method: "GET",
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        });
        setPayment(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCheckoutPaymentData();
    return getCheckoutPaymentData;
  }, []);

  const paymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
    setIsDisabled(true);
  };

  const checkoutButtonHandler = () => {
    const accesstoken = localStorage.getItem("accesstoken");
    dispatch(appointmentAction.updatePaymentMethod(paymentMethod, accesstoken));
    // history.push()
  };
  return (
    <Container>
      <h3 className="checkout-page-title">Checkout</h3>
      <Row className="checkout-page-row">
        <Col sm={12} lg={6}>
          <h5>Product</h5>
          <Card id="card-product">
            <Card.Header className="card-product-header">
              Appointment {payment?.product_type}
            </Card.Header>
            <Card.Body>
              <Card.Title id="card-product-info">
                Psychiatrist :{" "}
                <b>
                  {payment?.product_detail?.psikiater_id?.first_name}{" "}
                  {payment?.product_detail?.psikiater_id?.last_name}
                </b>
              </Card.Title>
              <Card.Title id="card-product-info">
                Patient :{" "}
                <b>
                  {payment?.product_detail?.patient_id.first_name}{" "}
                  {payment?.product_detail.patient_id?.last_name}{" "}
                </b>
              </Card.Title>
              <Card.Title id="card-product-info">
                Date :{" "}
                <b>
                  {moment(payment?.product_detail?.appointment_date).format(
                    "DD MMM YYYY"
                  )}
                </b>
              </Card.Title>
              <Card.Title id="card-product-info">
                Time : <b>{payment?.product_detail?.appointment_time}</b>
              </Card.Title>
              <Card.Title id="card-product-info">
                <b>1 Hour Session</b>
              </Card.Title>
            </Card.Body>
          </Card>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label id="checkout-payment-method-selection">
                <h5>Payment Method</h5>
              </Form.Label>
              <Form.Control
                disabled={isDisabled}
                onChange={paymentMethodHandler}
                className="checkout-select-option"
                as="select"
              >
                <option>Select Method</option>
                <option>PayPal</option>
                <option>GoPay</option>
                <option>DANA</option>
                <option>OVO</option>
                <option>Jenius</option>
                <option>Transfer Bank</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={12} lg={6}>
          <h5>Payment Detail</h5>
          <Card id="payment-detail-card">
            <Card.Body>
              <Card.Title>Price : </Card.Title>
              <h1 id="checkout-price">
                {currencyFormatter.format(payment?.product_price, {
                  code: "IDR",
                })}
              </h1>
              <hr />
              <Card.Title>Total Amount : </Card.Title>
              <h1 id="checkout-price">
                {currencyFormatter.format(payment?.product_price, {
                  code: "IDR",
                })}
              </h1>
              <Container className="checkout-button-wrapper">
                <Button variant="dark" className="checkout-cancel-button">
                  Cancel
                </Button>
                <Button className="checkout-checkout-button">Checkout</Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Checkout;
