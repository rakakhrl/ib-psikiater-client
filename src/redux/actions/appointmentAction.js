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

export { changeStatusCheckout };
