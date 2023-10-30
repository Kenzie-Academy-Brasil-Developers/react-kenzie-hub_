import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginformSchema } from "./loginForm.schema.js";
import { useState } from "react";
import api from "../../../services";

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
            const { data } = await api.post("/login", payLoad);
            setUser(data.user);
            localStorage.setItem("TOKEN", data.accessToken);
            navigate("/user");
        } catch (error) {
            console.log(error)
            if (error.response?.data === "Incorret password") {
                alert("Credenciais inválidas")
            }
        } finally {
            setLoading(false);
        }
    };

    const submit = (payLoad) => {
        userLogin(payLoad);
    }
    return (
        <form className="container" onSubmit={handleSubmit(submit)}>
            <label className="label">Email</label>
            <Input
                label="Email"
                type="text"
                id="email"
                placeholder="Digite seu email aqui"
                error={errors.email}
                {...register("email")}
            />
            <label className="label">Senha</label>
            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="Digite sua senha aqui"
                error={errors.password}
                {...register("password")}
            />

            <button className="btnLogin" type="submit" disabled={loading}>Entrar</button>

            <div>
                <p className="headline container">Ainda não possui uma conta?</p>
                <Link className="btnRegister" to="/register">Cadastre-se</Link>
            </div>

        </form >
    );
};
