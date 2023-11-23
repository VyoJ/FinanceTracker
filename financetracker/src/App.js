import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";
import Transactions from "./Routes/Transactions";
import Layout from "./Components/Layout";
import Goals from "./Routes/Goals";
import Dashboard from "./Routes/Dashboard";
import AddTransaction from "./Routes/AddTransaction";

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
        <Route
          path="/Goals"
          element={
            <Layout>
              <Goals />
            </Layout>
          }
        />
        <Route
          path="/Transactions"
          element={
            <Layout>
              <Transactions />
            </Layout>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="/AddTransaction" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
