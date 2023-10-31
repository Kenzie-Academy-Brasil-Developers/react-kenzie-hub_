import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginformSchema } from "./loginForm.schema.js";
import { useState } from "react";
import api from "../../../services";
import styles from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors },               
    } = useForm({
        resolver: zodResolver(loginformSchema),
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const userLogin = async (payLoad) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", payLoad);
            setUser(data.user);
            console.log(data)
            localStorage.setItem("TOKEN", data.token);
            localStorage.setItem("USER", data.user);
            navigate("/user");
        } catch (error) {
            console.log(error)
            if (error.response?.status === 401) {
                toast.error("Credenciais inválidas")
            }
        } finally {
            setLoading(false);
        }
    };

    const submit = (payLoad) => {
        userLogin(payLoad);
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit(submit)}>
            <Input
                label="Email"
                type="text"
                id="email"
                placeholder="Digite seu email aqui"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="Digite sua senha aqui"
                error={errors.password}
                {...register("password")}
            />

            <button className="btnLogin" type="submit" disabled={loading}>Entrar</button>

            <div className={styles.textAccount}>
                <p className="headline">Ainda não possui uma conta?</p>
                <Link className="btnRegister" to="/register">Cadastre-se</Link>
            </div>

        </form >
    );
};
