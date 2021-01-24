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

const createPayment = (
  patient,
  product_type,
  complaint,
  allergy,
  accesstoken,
  psikiater_id,
  patient_id,
  appointment_date,
  appointment_time,
  isOnline,
  getIdCallback
) => async (dispatch) => {
  try {
    const createPayment = await API({
      url: `/payments/checkout`,
      method: "POST",
      headers: {
        accesstoken: accesstoken,
      },
      data: {
        patient: patient,
        product_type: product_type,
        product_detail: {
          complaint: complaint,
          allergy: [allergy],
          psikiater_id: psikiater_id,
          patient_id: patient_id,
          appointment_date: appointment_date,
          appointment_time: appointment_time,
          isOnline: isOnline,
        },
      },
    });
    console.log(createPayment.data.data);
    getIdCallback(createPayment.data.data._id);
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
  appointment_time,
  isOnline,
  getIdCallback
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
        isOnline: isOnline,
      },
    });
    console.log(createAppointment.data.data._id);
    getIdCallback(createAppointment.data.data._id);
  } catch (error) {
    console.log(error);
  }
};

const fetchPsikiaterAppointment = () => async (dispatch) => {
  try {
    const res = await API({
      method: "GET",
      url: `/appointments/psikiater`,
      headers: {
        accesstoken: localStorage.getItem("accesstoken"),
      },
    });

    dispatch({
      type: "FETCH_PSIKIATER_APPOINTMENT",
      payload: { appointments: res.data.data },
    });
  } catch (error) {
    console.log(error);
  }
};

const appointmentAction = {
  changeStatusAppointment,
  addDiagnosePatient,
  createRating,
  createPayment,
  createAppointment,
  createPrescription,
  fetchPsikiaterAppointment,
};

export default appointmentAction;
