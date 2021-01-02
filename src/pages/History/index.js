import React from "react";
import SideBar from "../../components/Sidebar/index";
import Navbar from "../../components/Navbar/AppbarHome";

const index = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Hisotry</h1>
    </>
  );
};

export default index;
