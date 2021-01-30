import { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./index.css";
import ModalPendingPayment from "./ModalPendingPayment";

const PendingPayments = (props) => {
  const currencyFormatter = require("currency-formatter");
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const data = props.data;
  console.log(data);

  const checkoutButtonHandler = (payment_id) => {
    history.push(`/upload-payment-slip/${payment_id}`);
  };

  return (
    <div>
      <Container>
        <Card className="pending-payment-card">
          <h3 className="pending-payment-title">Pending Payment</h3>
          {data.map((item) => {
            return (
              <>
                <Container>
                  <Form.Label>Product Type</Form.Label>
                  {item.product_type === "apt-ol" ? (
                    <Form.Control
                      id="payment-pending-form-control"
                      value="Appointment Online"
                    />
                  ) : (
                    <Form.Control
                      id="payment-pending-form-control"
                      value="Appointment Offline"
                    />
                  )}
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control
                    id="payment-pending-form-control"
                    value={item.payment_method}
                  />
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    id="payment-pending-form-control"
                    value={currencyFormatter.format(item.product_price, {
                      code: "IDR",
                    })}
                  />
                  <Row id="payment-pending-button">
                    <Col>
                      <Button
                        onClick={() => setModalShow(true)}
                        className="payment-pending-button-detail"
                      >
                        Detail
                      </Button>
                      <Button
                        onClick={() => checkoutButtonHandler(item._id)}
                        className="payment-pending-button-checkout"
                      >
                        Checkout
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })}
        </Card>
        <ModalPendingPayment
          data={data}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};
export default PendingPayments;

/* <h5>Product Type : {item.product_type}</h5>
                <h5>
                  Patient Name : {item.product_detail.patient_id.first_name}{" "}
                  {item.product_detail.patient_id.last_name}
                </h5>
                <h5>
                  Psychiatrist Name :{" "}
                  {item.product_detail.psikiater_id.first_name}{" "}
                  {item.product_detail.psikiater_id.last_name}
                </h5>
                <h5>
                  Appointment Date :{" "}
                  {moment(item.product_detail.appointment_date).format(
                    "DD MMM YYYY"
                  )}
                </h5>
                <h5>
                  Appointment Time : {item.product_detail.appointment_time}
                </h5>
                <h5>Payment Method : {item.payment_method}</h5>
                <h5>
                  Product Price :{" "}
                  {currencyFormatter.format(item.product_price, {
                    code: "IDR",
                  })}
                </h5> */
