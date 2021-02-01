import API from "../../API/mainServer";
import appAction from "./appAction";
import swal from "sweetalert";
import { LOGIN, LOGOUT } from "./actionTypes";

const registerPsikiater = (
  first_name,
  last_name,
  password,
  email,
  date_of_birth,
  gender,
  specialize,
  experience_year,
  region,
  fee,
  work_address,
  callback
) => async (dispatch) => {
  try {
    const psikiater = await API({
      method: "POST",
      url: "/auth/register-psikiater",
      data: {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        date_of_birth,
        gender: gender,
        specialize: specialize,
        experience_year: experience_year,
        region: region,
        fees: fee,
        work_address: work_address,
      },
    });

    callback();
  } catch (error) {
    swal("Register Gagal!", error.response.data.message, "error");
  }
};

const uploadFotoPasien = (avatar) => async (dispatch) => {
  try {
    const role = localStorage.getItem("role");
    const user_id = localStorage.getItem("userId");
    const accesstoken = localStorage.getItem("accesstoken");

    const data = new FormData();
    data.append("profile_photo", avatar);
    const uploadFotoPasien = await API({
      method: "POST",
      url: `/patients/upload/${user_id}`,
      datay: data,
      headers: {
        accesstoken: accesstoken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const uploadFotoPsikiater = (avatar) => async (dispatch) => {
  try {
    const role = localStorage.getItem("role");
    const user_id = localStorage.getItem("userId");
    const accesstoken = localStorage.getItem("accesstoken");

    const data = new FormData();
    data.append("profile_photo", avatar);
    const uploadFotoPsikiater = await API({
      method: "POST",
      url: `/psikiater/upload/${user_id}`,
      data: data,
      headers: {
        accesstoken: accesstoken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const registerPatient = (
  first_name,
  last_name,
  password,
  email,
  date_of_birth,
  gender,
  address,
  callback
) => async (dispatch) => {
  try {
    const patient = await API({
      method: "POST",
      url: "/auth/register-patient",
      data: {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        date_of_birth: date_of_birth,
        gender: gender,
        address: address,
      },
    });
    callback();
  } catch (error) {
    swal("Register Gagal!", error.response.data.message, "error");
  }
};

const fetchUserData = () => async (dispatch) => {
  try {
    const role = localStorage.getItem("role");
    const user_id = localStorage.getItem("userId");
    const accesstoken = localStorage.getItem("accesstoken");

    if (!role || !user_id || !accesstoken) {
      console.log("not persist data");
      dispatch({ type: LOGOUT });
    }

    if (role === "ADMIN") {
      const patient = await API({
        method: "GET",
        url: `/admin/admin/${user_id}`,
        headers: {
          accesstoken: accesstoken,
        },
      });

      dispatch({
        type: LOGIN,
        payload: {
          isLogin: true,
          role: role,
          user_data: patient.data.data,
        },
      });
    }

    if (role === "PATIENT") {
      const patient = await API({
        method: "GET",
        url: `/patients/${user_id}`,
        headers: {
          accesstoken: accesstoken,
        },
      });

      dispatch({
        type: LOGIN,
        payload: {
          isLogin: true,
          role: role,
          user_data: patient.data.data,
        },
      });
    }

    if (role === "PSIKIATER") {
      const psikiater = await API({
        method: "GET",
        url: `/psikiater/${user_id}`,
        headers: {
          accesstoken: accesstoken,
        },
      });

      dispatch({
        type: LOGIN,
        payload: {
          isLogin: true,
          role: role,
          user_data: psikiater.data.data,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const checkAccessToken = (accessToken) => async (dispatch) => {
  try {
    const getUserProfile = await API({
      method: "GET",
      url: "/auth/identifer",
      headers: {
        accessToken: accessToken,
      },
    });

    console.log(getUserProfile);

    dispatch({
      type: "LOGIN",
      payload: {
        user_id: getUserProfile.data.data.user_id,
        role: getUserProfile.data.data.role,
      },
    });
    dispatch(appAction.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

const changePsikiaterSchedule = (
  psikiater_id,
  accesstoken,
  work_days,
  work_time,
  callback
) => async (dispatch) => {
  try {
    const response = await API({
      method: "PATCH",
      url: `/schedule/${psikiater_id}`,
      headers: {
        accesstoken: accesstoken,
      },
      data: {
        work_days: work_days,
        work_time: work_time,
      },
    });
    callback();
  } catch (error) {
    console.log(error);
  }
};

const userAction = {
  checkAccessToken,
  registerPsikiater,
  registerPatient,
  fetchUserData,
  changePsikiaterSchedule,
  uploadFotoPasien,
  uploadFotoPsikiater,
};

export default userAction;
