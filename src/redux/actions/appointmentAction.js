import API from "../../API/mainServer";

const changeStatusCheckout = (status, appointment_id, accesstoken) => async (
  dispatch
) => {
  const changeStatusCheckout = await API({
    url: `/appointments/status/${appointment_id}`,
    method: "PATCH",
    headers: {
      accesstoken: accesstoken,
    },
    data: {
      status: status,
    },
  });
};

const createRating = (
  patient_id,
  psikiater_id,
  appointment_id,
  rating,
  review
) => async (dispatch) => {
  try {
    const token = localStorage.getItem("accesstoken");

    const response = await API({
      method: "POST",
      url: "/reviews",
      headers: {
        accesstoken: token,
      },
      data: {
        patient_id,
        psikiater_id,
        appointment_id,
        rating,
        feedback: review,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createAppointment = (first_name, last_name, complaint, allergy) => async (
  dispatch
) => {
  try {
    const createAppointment = await API({
      method: "POST",
      url: "/appointments",
      headers: {
        accesstoken: accesstoken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { changeStatusCheckout, createRating, createAppointment };
