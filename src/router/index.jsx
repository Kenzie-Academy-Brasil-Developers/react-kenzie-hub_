import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import React from "react";
import { PrivateRoutes } from "./PrivateRoutes";

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes/>}>
                <Route path="/user" element={<UserPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};