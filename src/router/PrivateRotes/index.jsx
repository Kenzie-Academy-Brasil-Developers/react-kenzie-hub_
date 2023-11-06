import { useContext } from "react";
import { UserContext } from "../../providers/UsersContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRotes = () => {
    const { user } = useContext(UserContext)

    return user ? <Outlet/> : <Navigate to="/"/>
};