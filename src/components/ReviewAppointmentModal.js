import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { createRating } from "../redux/actions/appointmentAction";

const ReviewAppointmentModal = ({
  show,
  handleClose,
  patient_id,
  psikiater_id,
  appointment_id,
}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();

  const submitReview = (e) => {
    e.preventDefault();
    dispatch(
      createRating(patient_id, psikiater_id, appointment_id, rating, review)
    );
    handleClose();
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <Form>
            <h5>Rating</h5>
            <StarRatings
              rating={rating}
              changeRating={(newRating, name) => setRating(newRating)}
              starRatedColor="gold"
            />
            <Form.Group controlId="ulasan">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => submitReview(e)}
            >
              Submit Review
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewAppointmentModal;
