// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import {Button} from "react-bootstrap";

import PrivateRoutePsikiater from "./component/PrivateRoutePsikiater";
import PrivateRoutePasien from "./component/PrivateRoutePasien";

import userAction from "./redux/actions/userAction";
import appAction from "./redux/actions/appAction";

import RegisterPsikiater from "./pages/RegisterPsikiater";
import RegisterPasien from "./pages/RegisterPasien";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Psikiater from "./pages/Psikiater";
import Pasien from "./pages/Pasien";

function App() {
  const dispatch = useDispatch();
  
  const isLoading = useSelector((state) => state.app.isLoading);
  const userLogin = useSelector((state) => state.user.user_id);
  
  console.log(userLogin);
  

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      dispatch(appAction.setLoading(false));
    } else {
      dispatch(userAction.checkAccessToken(accessToken));
    }
  }, []);

  const handleLogout = () => {
    swal({
      title: "Apakah anda yakin keluar dari halaman ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("accessToken");
        window.location.reload();

        dispatch({
          type: "CHANGE_USER_LOGIN_STATUS",
          payload: {
            loginStatus: false,
          },
        });
      } else {
        // swal("Silahkan Lanjutkan!");
      }
    });
  };

  
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <Router>
          <nav>
            <Link to="/psikiater">Psikiater</Link>
            <Link to="/pasien">Pasien</Link>
            {userLogin ? (
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              null
            )}
          </nav>
          <Switch>
            <PrivateRoutePsikiater path="/psikiater" exact>
              <Psikiater />
            </PrivateRoutePsikiater>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registerPsikiater">
              <RegisterPsikiater />
            </Route>
            <Route path="/registerPasien">
              <RegisterPasien />
            </Route>
            <PrivateRoutePasien path="/pasien" exact>
              <Pasien />
            </PrivateRoutePasien>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
