import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import swal from "sweetalert";
import API from "../../API/mainServer";
import moment from "moment";

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
          accesstoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAwNjhiNDY0NjU3YTYxYWI4NWU4ODFkIiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MTEyODU1NTZ9.6zFmprUjUTAJ8_c5dH0k8l0zdertofqwmDQwywjwjLg",
        },
      });

      console.log(response.data.data);
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
      <h3>Upload Payment Proof</h3>
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
          {file.name ? (
            <Card className="h-100 p-2">
              <Card.Img
                className="h-100"
                variant="top"
                alt="preview"
                src={URL.createObjectURL(file)}
              />
            </Card>
          ) : (
            <Card className="h-100 p-2">
              {paymentObject.slip_url ? (
                <Card.Img
                  className="h-100"
                  variant="top"
                  alt="preview"
                  src={paymentObject.slip_url}
                />
              ) : (
                <Card.Text className="text-secondary text-center">
                  Upload your payment proof for verification
                </Card.Text>
              )}
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSlipUpload;
