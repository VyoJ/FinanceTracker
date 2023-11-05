import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div className="h-[calc(100vh-176px)] overflow-auto bg-black">
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;