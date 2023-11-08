import React, { useState } from "react";
import { RouterMain } from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "./providers/UsersContext.jsx";
import { Loading } from "./components/Loading/index.jsx";

export const App = () => {
  const { loading } = useContext(UserContext)

  return (
    <>
      {loading ? <Loading /> : <RouterMain />}
      <ToastContainer position="bottom-right" autoClose={2 * 1000} theme="dark" />
    </>
  );
};


