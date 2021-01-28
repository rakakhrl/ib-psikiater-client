import React from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import moment from "moment";

const PaymentDetailModal = ({ show, handleClose, payment }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detail Payment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col className="text-left">Transaction ID:</Col>
          <Col className="text-left">{payment._id}</Col>
        </Row>
        <Row>
          <Col className="text-left">Paid by:</Col>
          <Col className="text-left">
            {payment.patient?.first_name} {payment.patient?.last_name}
          </Col>
        </Row>

        <Row>
          <Col className="text-left">Product type:</Col>
          <Col className="text-left">{payment.product_type}</Col>
        </Row>
        <Row>
          <Col className="text-left">Payment status:</Col>
          <Col className="text-left">{payment.payment_status}</Col>
        </Row>
        <Row>
          <Col className="text-left">Paid At:</Col>
          <Col className="text-left">
            {moment(payment.createdAt).format("DD-MM-YYYY")}
          </Col>
        </Row>
        <Row>
          <Col className="text-left">Payment slip:</Col>
          <Col className="text-left">
            <Image height="200" width="200" src={payment.slip_url} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentDetailModal;
