import { RouterMain } from "./router/index.jsx";
import "src/styles/modules";
import "react-toastify.dist/ReactToastify.scss";

export const App = () => {
  return (
    <>
      <RouterMain />
      <ToastContainer position="bottom-right" autoClose={2 * 1000}/>
    </>
  );
};


