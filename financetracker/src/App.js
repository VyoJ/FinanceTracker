import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp"
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/SignUp"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
