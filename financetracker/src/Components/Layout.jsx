import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const pathname = useLocation().pathname;
  if (
    (pathname === "/") |
    (pathname === "/Login") |
    (pathname === "/SignUp") |
    (pathname === "/About")
  ) {
    return (
      <>
        <Navbar />
        <div
          style={{ background: `url("/bg3.jpg")` }}
          className={`h-[calc(100vh-176px)] bg-no-repeat`}
        >
          {children}
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  }
};

export default Layout;
