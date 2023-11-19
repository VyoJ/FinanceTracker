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
        <div className="h-[calc(100vh-176px)] bg-no-repeat bg-[url('https://wallpaperboat.com/wp-content/uploads/2021/04/15/75170/finance-04.jpg')] bg-gray-700">
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
