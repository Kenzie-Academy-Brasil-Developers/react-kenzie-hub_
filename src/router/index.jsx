import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { DashboardPage } from "../pages/DashboardPage";
import { PublicRoutes } from "./PublicRoutes";
import { NewsPage } from "../pages/NewsPage";

export const RouterMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes/>}>
                <Route path="/user" element={<UserPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};