import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import API from "../../API/mainServer";
import swal from "sweetalert";
import appointmentAction from "../../redux/actions/appointmentAction";

const ReviewPsikiaterModal = (props) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const submitReview = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      const response = await API({
        method: "POST",
        url: `/reviews`,
        headers: {
          accesstoken: "token",
        },
        data: {
          psikiater_id: props.appointmentDone.psikiater_id._id,
          patient_id: props.appointmentDone.patient_id._id,
          appointment_id: props.appointmentDone._id,
          rating: rating,
          feedback: review,
        },
      });
      swal("Success", response.data.message, "success");

      console.log(response);

      props.onHide();
    } catch (error) {
      swal("Failed", error.response.data.message, "error");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Review Psikiater</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StarRatings
              rating={rating}
              changeRating={(newRating, name) => setRating(newRating)}
              starRatedColor="gold"
              starDimension="30px"
            />
            <Form onSubmit>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={review}
                  placeholder="Type review here"
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={() => submitReview()}
            >
              Submit Review
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ReviewPsikiaterModal;
