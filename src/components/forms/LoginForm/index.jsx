import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../providers/UsersContext.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginformSchema } from "./loginForm.schema.js";
import styles from "./style.module.scss";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(loginformSchema),
    });

    const { userLogin } = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    const submit = (formData) => {
        userLogin(formData, setLoading, reset);
    };

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
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="Digite sua senha aqui"
                error={errors.password}
                {...register("password")}
            />
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}


            <button className={styles.btnLogin} type="submit" disabled={loading}>Entrar</button>

            <div>
                <p className={styles.headline}>Ainda não possui uma conta?</p>
                <Link className={styles.btnRegister} to="/register">Cadastre-se</Link>
            </div>

        </form >
    );
};
