import React, { useState } from "react";
import { RouterMain } from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "./providers/UsersContext.jsx";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const { } = useContext(UserContext)

  return (
    <>
      {loading ? <div>Carregando...</div> : <RouterMain />}
      <ToastContainer position="bottom-right" autoClose={2 * 1000} theme="dark" />
    </>
  );
};


