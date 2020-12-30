import API from "../../API/mainServer";
import swal from "sweetalert";

const userRegisterPsikiater = (
  first_name,
  last_name,
  password,
  email,
  date_of_birth,
  gender,
  experience_year,
  region
) => async (dispatch) => {
  try {
    const userRegisterPsikiater = await API({
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
      },
    });

    swal("Register Sukses!", "", "success");

    const userLogin = await API({
      method: "POST",
      url: "/auth/login",
      data: {
        email: email,
        password: password,
      },
    });

    localStorage.setItem("accessToken", userLogin.data.token);
    localStorage.setItem("role", userLogin.data.role);

    dispatch({
      type: "LOGIN",
      payload: {
        user_id: userLogin.data.data._id,
        role: userLogin.data.role,
      },
    });
  } catch (error) {
    swal("Register Gagal!", "", "error");
    console.log("Gagal Register");
  }
};

const userAction = {
  userRegisterPsikiater,
};

export default userAction;
