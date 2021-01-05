import API from "../../API/mainServer";

const changeStatusPaid = (status, appointment_id, accesstoken) => async (
  dispatch
) => {
  try {
    const changeStatusPaid = await API({
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
    const changeStatusDone = await API({
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
    const addDiagnosePatient = await API({
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

const appointmentAction = {
  changeStatusPaid,
  changeStatusDone,
  addDiagnosePatient,
};

export default appointmentAction;
