import React from "react";
import { Modal, Row, Col, Image, Form, FormControl } from "react-bootstrap";
import moment from "moment";

const PaymentDetailModal = ({ show, handleClose, payment }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detail Payment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col lg={6} sm={12}>
            <Form.Label>Payment Slip</Form.Label>
            <Row>
              <Col>
                <Image height="200" width="200" src={payment.slip_url} />
              </Col>
            </Row>
          </Col>
          <Col lg={6} sm={12}>
            <Row>
              <Col>
                <Form.Label>Transaction ID : {payment._id} </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <Form.Label>Paid By</Form.Label>
                <Form.Control
                  className="text-center"
                  value={`${payment.patient?.first_name} ${payment.patient?.last_name}`}
                />
              </Col>
              <Col lg={6} sm={12}>
                <Form.Label>Product Type</Form.Label>
                <Form.Control
                  className="text-center"
                  value={payment.product_type}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <Form.Label>Payment Status</Form.Label>
                <Form.Control
                  className="text-center"
                  value={payment.payment_status}
                />
              </Col>
              <Col lg={6} sm={12}>
                <Form.Label>Paid At</Form.Label>
                <Form.Control
                  className="text-center"
                  value={moment(payment.createdAt).format("DD-MM-YYYY")}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentDetailModal;
