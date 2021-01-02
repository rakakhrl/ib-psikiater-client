
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/actions/authAction";
import userAction from "./redux/actions/userAction";
import appAction from "./redux/actions/appAction";
import AppRoute from "./AppRoute";
import AppNavbar from "./components/AppNavbar";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(
    () => {
      dispatch(appAction.setLoading(true));
      const isLoginPersist = localStorage.getItem("isLogin");
      if (isLoginPersist === "true") {
        dispatch(userAction.fetchUserData());
      } else {
        dispatch(logout());
      }
      dispatch(appAction.setLoading(false));
    },
    // esling-disable-next-line
    []
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
