import React from "react";
import { Outlet } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";

function Layout() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
