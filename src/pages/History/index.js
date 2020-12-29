import React from "react";
import AppBar from "../../components/Appbar/index";
import AppbarHome from "../../components/Appbar/AppbarHome";

const index = () => {
  return (
    <>
      <AppbarHome />
      <AppBar />
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Hisotry</h1>
    </>
  );
};

export default index;
