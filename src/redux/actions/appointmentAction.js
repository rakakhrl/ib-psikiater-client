import API from "../../API/mainServer";

const changeStatusAppointment = (status, appointment_id, accesstoken) => async (
  dispatch
) => {
  try {
    const response = await API({
      method: "PATCH",
      url: `/appointments/status/${appointment_id}`,
      headers: {
        accesstoken: accesstoken,
      },
      data: {
        status: status,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addDiagnosePatient = (
  diagnose_name,
  diagnose_date,
  accesstoken,
  appointment_id
) => async (dispatch) => {
  try {
    const response = await API({
      method: "PATCH",
      url: `/appointments/diagnose/${appointment_id}`,
      headers: {
        accesstoken: accesstoken,
      },
      body: {
        diagnose_name: diagnose_name,
        diagnose_date: diagnose_date,
      },
    });
  } catch (error) {
    console.log(error);
  }
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

const appointmentAction = {
  changeStatusAppointment,
  addDiagnosePatient,
  createRating,
};

export default appointmentAction;
