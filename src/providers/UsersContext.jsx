import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/index.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const { state } = useLocation();

    const pathname = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate(pathname)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");

        toast.warn("Deslogando...");
    };

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.user.id);
            reset();
            navigate(state?.lastRoute ? state.lastRoute : pathname);
        } catch (error) {
            console.log(error)
            if (error.response) {
                if (error.response?.status === 401) {
                    toast.error("Credenciais inválidas");
                } else {
                    toast.error(`Error: ${error.response.data.message}`);
                }
            } else {
                toast.error("Algo deu errado! :c");
            }
        } finally {
            setLoading(false);
        }
    };

    const userRegister = async (formData, setLoading) => {
        console.log(formData, setLoading)
        try {
            setLoading(true);
            await api.post("/users", formData);
            navigate("/");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            console.log(error);
            toast.error("Algo deu errado! :c");
        } finally {
            setLoading(false)
        }
    };

    return <UserContext.Provider value={{ loading, user, userLogin, userLogout, userRegister }}>
        {children}
    </UserContext.Provider>
};