import API from "../../API/mainServer";
import swal from "sweetalert";

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
      data: {
        diagnose_name: diagnose_name,
        diagnose_date: diagnose_date,
      },
    });

    swal("Success", response.data.message, "success");
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
    swal("Failed", error.response.data.message, "error");
  }
};

const createPrescription = (
  appointment_id,
  drug_name,
  method_name,
  time_sequence
) => async (dispatch) => {
  try {
    const response = await API({
      method: "POST",
      url: `/prescriptions/${appointment_id}`,
      headers: {
        accesstoken: localStorage.getItem("accesstoken"),
      },
      data: {
        drug_name: drug_name,
        method_name: method_name,
        time_sequence: time_sequence,
      },
    });

    swal("Success", response.data.message, "success");
  } catch (error) {
    console.log(error);
    swal("Failed", error.response.data.message, "error");
  }
};

const createAppointment = (
  complaint,
  allergy,
  accesstoken,
  psikiater_id,
  patient_id,
  appointment_date,
  appointment_time
) => async (dispatch) => {
  try {
    const createAppointment = await API({
      method: "POST",
      url: "/appointments",
      headers: {
        accesstoken: accesstoken,
      },
      data: {
        psikiater_id: psikiater_id,
        patient_id: patient_id,
        appointment_date: appointment_date,
        appointment_time: appointment_time,
        complaint: complaint,
        allergy: [allergy],
      },
    });
    console.log(createAppointment.data.data._id);
    localStorage.setItem("id_appointment", createAppointment.data.data._id);
  } catch (error) {
    console.log(error);
  }
};

const appointmentAction = {
  changeStatusAppointment,
  addDiagnosePatient,
  createRating,
<<<<<<< HEAD
  createAppointment,
=======
  createPrescription,
>>>>>>> 340816e57dd746189bb189634d0c44d47df13231
};

export default appointmentAction;
