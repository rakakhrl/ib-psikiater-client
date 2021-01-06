import API from "../../API/mainServer";

const changeStatusPaid = (status, appointment_id, accesstoken) => async (
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

const changeStatusDone = (status, appointment_id, accesstoken) => async (
  dispatch
) => {
  try {
    const response = await API({
      // => fungsi ini di panggil di psikaiter dashborard, setiap kali psikiater tekan tombol selesai makan akan menjalankan fungsi ini
      method: "PATCH",
      url: `/appointments/status/${appointment_id}`,
      headers: {
        accesstoken: accesstoken,
      },
      data: {
        status: status, // => expect status yang dikirim oleh psikiater "done"S
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addDiagnosePatient = (
  diagnose_name,
  diagnose_time,
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
        diagnose_time: diagnose_time,
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
  changeStatusPaid,
  changeStatusDone,
  addDiagnosePatient,
  createRating,
  createAppointment,
};

export default appointmentAction;
