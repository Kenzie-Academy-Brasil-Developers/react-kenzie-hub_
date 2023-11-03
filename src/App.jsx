import { RouterMain } from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const [user, setUser] = useState()

  const navigate = useNavigate()

  const logout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");
  };

  return (
    <>
      <RouterMain user={user} setUser={setUser} />
      <ToastContainer position="bottom-right" autoClose={2 * 1000} />
    </>
  );
};


