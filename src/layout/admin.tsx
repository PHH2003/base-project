import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../admin/header";
const LayoutAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
