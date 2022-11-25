import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../elements/Nav";
import Footer from "../elements/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
