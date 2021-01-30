import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "./redux/actions/authAction";
import userAction from "./redux/actions/userAction";
import AppRoute from "./AppRoute";
import AppNavbar from "./components/AppNavbar/index";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.app.isLoading);
  const user = useSelector((state) => state.user);

  useEffect(
    () => {
      const isLoginPersist = localStorage.getItem("isLogin");
      if (isLoginPersist === "true") {
        dispatch(userAction.fetchUserData());
      } else {
        dispatch(logout());
      }
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (user.role === "PSIKIATER") {
        history.push("/psikiater-dashboard");
      } else if (user.role === "ADMIN") {
        history.push("/admin-dashboard");
      }
    },
    // eslint-disable-next-line
    [user]
  );

  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <>
          <AppNavbar />
          <AppRoute />
        </>
      )}
    </>
  );
};

export default App;
