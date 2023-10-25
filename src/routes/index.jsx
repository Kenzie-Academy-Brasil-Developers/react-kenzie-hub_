import { Route, Routes } from "react-router-dom";
import { HomePage} from "../pages/HomePage/index";
import { RegisterPage} from "../pages/RegisterPage";
import { UserPage} from "../pages/UserPage";
import { Dashboard} from "../pages/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";


export const RouterMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};