import API from "../../API/mainServer";
import swal from "sweetalert";
import { LOGIN, LOGOUT } from "./actionTypes";

const login = (email, password) => async (dispatch) => {
  try {
    const user = await API({
      method: "POST",
      url: "/auth/login",
      data: {
        email: email,
        password: password,
      },
    });

    localStorage.setItem("isLogin", true);
    localStorage.setItem("accesstoken", user.data.token);
    localStorage.setItem("userId", user.data.data._id);
    localStorage.setItem("role", user.data.role);

    dispatch({
      type: LOGIN,
      payload: {
        isLogin: true,
        role: user.data.role,
        user_data: user.data.data,
      },
    });
  } catch (error) {
    swal("Login Gagal!", "Username/Password Salah!", "error");
    console.error(error);
  }
};

const logout = () => (dispatch) => {
  try {
    localStorage.clear();

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error(error);
  }
};

export { login, logout };
