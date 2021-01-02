import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Pasien = () => {
  const nama = useSelector((state) => state.user);
  console.log(nama);
  return (
    <>
      <span>Ini adalah halaman {JSON.stringify(nama.role)} dengan ID</span>{" "}
      <span>{JSON.stringify(nama.user_id)}</span>
    </>
  );
};

export default Pasien;
