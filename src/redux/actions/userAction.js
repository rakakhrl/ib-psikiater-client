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
  experience_year,
  region,
  fee
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
        experience_year: experience_year,
        region: region,
        fees: fee,
      },
    });

    localStorage.setItem("isLogin", true);
    localStorage.setItem("accesstoken", psikiater.data.token);
    localStorage.setItem("userId", psikiater.data.data._id);
    localStorage.setItem("role", psikiater.data.role);

    dispatch({
      type: LOGIN,
      payload: {
        isLogin: true,
        role: psikiater.data.role,
        user_data: psikiater.data.data,
      },
    });

    swal("Register Sukses!", "", "success");
  } catch (error) {
    swal("Register Gagal!", "", "error");
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
  address
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

    localStorage.setItem("isLogin", true);
    localStorage.setItem("accesstoken", patient.data.token);
    localStorage.setItem("userId", patient.data.data._id);
    localStorage.setItem("role", patient.data.role);

    dispatch({
      type: LOGIN,
      payload: {
        isLogin: true,
        role: patient.data.role,
        user_data: patient.data.data,
      },
    });

    swal("Register Sukses!", "", "success");
  } catch (error) {
    swal("Register Gagal!", "", "error");
    console.log(error);
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

    // console.log(getUserProfile)
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

const userAction = {
  checkAccessToken,
  registerPsikiater,
  registerPatient,
  fetchUserData,
};

export default userAction;