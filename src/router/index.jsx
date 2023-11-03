import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage} from "../pages/HomePage/index";
import { RegisterPage} from "../pages/RegisterPage";
import { UserPage} from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import React from "react";

export const RouterMain = ({user, userLogout, setUser}) => {
   
    return(
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser}/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage user={user} />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};