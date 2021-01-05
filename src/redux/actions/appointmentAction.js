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

const submitAppointment = (
  first_name,
  last_name,
  complaint,
  allergy,
  accesstoken
) => async (dispatch) => {
  const submitAppointment = await API({
    url: `/appointments`,
    method: "POST",
    headers: {
      accesstoken: accesstoken,
    },
    data: {
      first_name: first_name,
      last_name: last_name,
      complaint: complaint,
      allergy: allergy,
    },
  });
};

export { changeStatusCheckout, submitAppointment };
