import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage} from "../pages/HomePage/index";
import { RegisterPage} from "../pages/RegisterPage";
import { UserPage} from "../pages/UserPage";
// import { Dashboard} from "../pages/Dashboard";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    };

    return(
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser}/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage user={user} userLogout={userLogout}/>} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};