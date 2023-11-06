import { RouterMain } from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <>
      <RouterMain />
      <ToastContainer position="bottom-right" autoClose={2 * 1000} theme="dark"/>
    </>
  );
};


