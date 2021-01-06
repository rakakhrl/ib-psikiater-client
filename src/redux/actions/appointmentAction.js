import API from "../../API/mainServer";
import swal from "sweetalert";

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
  } catch (e) {
    console.log(error);
    swal("Failed", error.response.data.message, "error");
  }
};

const appointmentAction = {
  changeStatusPaid,
  changeStatusDone,
  addDiagnosePatient,
  createRating,
  createPrescription,
};

export default appointmentAction;
