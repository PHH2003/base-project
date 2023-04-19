import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../admin/header";

import Footer from "../clients/footer";
import { Header } from "../clients/header";
const LayoutUser = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutUser;
