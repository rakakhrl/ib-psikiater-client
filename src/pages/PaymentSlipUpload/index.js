import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Card,
  Button,
  Spinner,
  Accordion,
  Image,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import swal from "sweetalert";
import API from "../../API/mainServer";
import moment from "moment";
import "./index.css";

const PaymentSlipUpload = () => {
  const [file, setFile] = useState({});
  const [paymentObject, setPaymentObject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { payment_id } = useParams();
  const history = useHistory();

  const fetchPaymentById = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: `/payments/${payment_id}`,
        headers: {
          accesstoken: token,
        },
      });

      setPaymentObject(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchPaymentById();

      return fetchPaymentById;
    },
    // eslint-disable-next-line
    []
  );

  const uploadPaymentSlip = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("accesstoken");

      const formData = new FormData();
      formData.append("payment_slip", file);

      await API({
        method: "POST",
        url: `/payments/upload-slip/${payment_id}`,
        headers: {
          accesstoken: token,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });

      setIsLoading(false);
      swal(
        "Upload success!",
        "Payment slip successfully uploaded! Please wait until your payment is verified by admin.",
        "success"
      ).then((value) => history.push("/patient-dashboard"));
    } catch (error) {
      swal("Upload failed!", error.message, "error");
      setIsLoading(false);
    }
  };

  const productType = (type) => {
    switch (type) {
      case "apt-ol":
        return "Online Appointment";
        break;
      case "apt-of":
        return "Offline Appointment";
        break;
      case "upgrade-plan":
        return "Upgrade to Premium";
        break;

      default:
        return "Product Type";
        break;
    }
  };

  return (
    <Container className="py-4">
      <h3 className="upload-payment-proof-page-title">Upload Payment Proof</h3>
      <Row className="mt-4">
        <Col md={6}>
          <Row>
            <Card className="w-100">
              <Card.Header>Payment Detail</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>ID: </strong>
                  {paymentObject._id}
                </Card.Text>
                <Card.Text>
                  <strong>Type: </strong>
                  {productType(paymentObject.product_type)}
                </Card.Text>
                <Card.Text>
                  <strong>Datetime: </strong>
                  {moment(
                    paymentObject.product_detail?.appointment_date
                  ).format("DD-MM-YYYY")}{" "}
                  {paymentObject.product_detail?.appointment_time}
                </Card.Text>
                <Card.Text>
                  <strong>Psychiatrist: </strong>
                  {paymentObject.product_detail?.psikiater_id.first_name}{" "}
                  {paymentObject.product_detail?.psikiater_id.last_name}
                </Card.Text>
                <Card.Text>
                  <strong>Fee: </strong>Rp {paymentObject.product_price}
                </Card.Text>
                <Card.Text>
                  <strong>Payment Date: </strong>
                  {moment(paymentObject.createdAt).format("DD-MM-YYYY")}
                </Card.Text>
                <Card.Text>
                  <strong>Payment Method: </strong>{" "}
                  {paymentObject.payment_method}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <br />
          <Row>
            <Form.File
              id="payment-proof"
              label={file.name ?? "Upload bukti pembayaran"}
              custom
              onChange={(e) => setFile(e.target.files[0])}
              disabled={paymentObject.slip_url}
            />
          </Row>
          <br />
          <Row>
            <Button
              className="w-100"
              disabled={isLoading || paymentObject.slip_url}
              onClick={uploadPaymentSlip}
            >
              {isLoading ? <Spinner animation="border" /> : "Upload"}
            </Button>
          </Row>
        </Col>
        <Col md={6} style={{ height: "440px" }}>
          {/* Menampilkan Cara Pembayaran */}
          <h5 className="payment-slip-how-to-pay-title">How To Pay </h5>
          <div
            className="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            tabindex="0"
          >
            <Accordion defaultActiveKey="">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    PayPal
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    1. Sign in to your PayPal Account <br />
                    2. Select a payment method you are connected (for example, a
                    credit card or bank account) in the Select a method to pay
                    section
                    <br />
                    3. Click Continue
                    <br />
                    4.Confirm the payment method, read PayPal's policies, then
                    click Approve & Continue
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Gopay
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Image
                      style={{ width: "200px" }}
                      src="https://1.bp.blogspot.com/-kzndGg4wwa8/XNeG6m5AGYI/AAAAAAAAk0s/wSQtqkx1NTE9e9b6iVwhlpaOmPImyLEPACLcBGAs/s1600/qr.jpg"
                    />
                    <br />
                    1. First, open the GoPay application on your cellphone.{" "}
                    <br />
                    2. Then, click the 'Scan' menu. <br />
                    3. Do a QR scan. <br />
                    4. After that, your payment will be check by our admin if
                    valid <br />
                    5. If Valid you will get an email.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    DANA
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    1. Make sure you have downloaded and logged in the DANA
                    application first. <br />
                    2. After selecting the DANA payment method, you will be
                    directed to the DANA page to make a payment.
                    <br />
                    3. Enter your DANA PIN. <br />
                    4. Click Pay and your transaction will be successful
                    (Payment Success) <br />
                    5. If your payment has been entered, your order status will
                    change to 'Paid'.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    OVO
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <Image
                      style={{ width: "200px" }}
                      src="https://1.bp.blogspot.com/-Zb1PYeqnNxs/XSOUOht-xKI/AAAAAAAAFAg/j4znYJWsw2Q3Fef9RKjjeDq7zMAd1KskgCLcBGAs/s1600/ovoku%2Bgold%2Bcaptain.png"
                    />
                    <br />
                    1. First, open the OVO application on your cellphone. <br />
                    2. Then, click the 'Scan' menu. <br />
                    3. Do a QR scan. <br />
                    4. After that, your payment will be check by our admin if
                    valid <br />
                    5. If Valid you will get an email.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Jenius Pay
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    1.
                    <Form.Control value="Enter your $ Cashtag" />
                    <br />
                    2. Open Your Jenius To Confirm Payment
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Bank Transfer
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    1. Insert an ATM card. <br />
                    2. Select a language <br />
                    3. Enter a Pin <br />
                    4. Select Transfer on the menu <br />
                    5. Choose another bank transfer destination <br />
                    6. Enter the bank code <br />
                    7. Enter Filings Bank Account : <b>3262-01-012057-53-9</b>
                    8. Enter the nominal according to the bill
                    <br />
                    9. You will get notification when your payment confirm.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSlipUpload;
