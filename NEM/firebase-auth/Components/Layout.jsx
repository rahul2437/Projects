import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="mx-14">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
