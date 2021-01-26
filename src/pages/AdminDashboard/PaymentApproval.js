import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../API/mainServer";

const PaymentApproval = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({});
  const [showDetailModal, setShowDetailModal] = useState(false);

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
  }, []);

  return (
    <div className="pt-3">
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
              <tr>
                <td>{p._id}</td>
                <td>
                  {p.patient.first_name} {p.patient.last_name}
                </td>
                <td>{p.product_type}</td>
                <td>{p.product_price}</td>
                <td>{p.payment_method}</td>
                <td>
                  <Button>Open detail</Button>
                </td>
                <td>
                  <Button>Accept</Button>
                </td>
                <td>
                  <Button>Reject</Button>
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
