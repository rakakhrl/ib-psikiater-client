import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import API from "../../API/mainServer";
import PaymentDetailModal from "./PaymentDetailModal";

const PaymentApproval = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({});
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPayments = async () => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: "/payments/pending",
        headers: {
          accesstoken: token,
        },
      });

      setPayments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayments();
    return fetchPayments;
  }, [isLoading]);

  const showPaymentDetailModal = (payment) => {
    setSelectedPayment(payment);
    setShowDetailModal(true);
  };

  const hidePaymentDetailModal = () => {
    setSelectedPayment({});
    setShowDetailModal(false);
  };

  const paymentApproval = async (operation, id) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "POST",
        url: "/admin/payment-approval",
        headers: {
          accesstoken: token,
        },
        data: {
          admin_action: operation,
          payment_id: id,
        },
      });
      setIsLoading(false);

      swal("Success", `Success ${operation} this payment.`, "success");
    } catch (error) {
      console.error(error);
      setIsLoading(false);

      swal("Failed", `Failed ${operation} this payment.`, "error");
    }
  };

  return (
    <div className="pt-3">
      <Modal show={isLoading} backdrop="static" keyboard={false} centered>
        <Spinner animation="border" />
      </Modal>
      <PaymentDetailModal
        show={showDetailModal}
        payment={selectedPayment}
        handleClose={hidePaymentDetailModal}
      />
      <h4>List Payment</h4>
      <div style={{ height: "80vh", maxHeight: "80vh", overflowY: "scroll" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Patient Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Detail</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>
                  {p.patient?.first_name} {p.patient?.last_name}
                </td>
                <td>{p.product_type}</td>
                <td>{p.product_price}</td>
                <td>{p.payment_method}</td>
                <td>
                  <Button onClick={() => showPaymentDetailModal(p)}>
                    Open detail
                  </Button>
                </td>
                <td>
                  <Button onClick={() => paymentApproval("accept", p._id)}>
                    Accept
                  </Button>
                </td>
                <td>
                  <Button onClick={() => paymentApproval("reject", p._id)}>
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentApproval;
