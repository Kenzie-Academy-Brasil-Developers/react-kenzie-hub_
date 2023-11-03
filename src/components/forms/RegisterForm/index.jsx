import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import api from "../../../services";
import { Select } from "../Select";
import { toast } from "react-toastify";
import styles from "./style.module.scss";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });
    console.log(errors);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userRegister = async (payLoad) => {
        console.log(payLoad)
        try {
            setLoading(true);
            await api.post("/users", payLoad);
            navigate("/");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            console.log(error);
            {
                toast.error("Algo deu errado! :c");
            }
        } finally {
            setLoading(false)
        }
    };

    const submit = (payLoad) => {
        userRegister(payLoad);
        console.log(payLoad)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Name"
                type="text"
                placeholder="Digite aqui seu nome"
                error={errors.name}
                {...register("name")}
            />

            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui o seu email"
                path="confirmPassword"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Crie uma senha"
                error={errors.password}
                {...register("password")}
            />

            <Input
                label="Confirmar senha"
                type="password"
                placeholder="Confirme sua senha"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
            />

            <Input
                label="Bio"
                type="text"
                placeholder="Escreva sobre você"
                error={errors.bio}
                {...register("bio")}
            />

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                error={errors.contact}
                {...register("contact")}
            />

            <Select label="Selecionar Módulo"
                {...register("course_module")}>
                <option value="Primeiro">Introdução ao Frontend</option>
                <option value="Segundo">Frontend Avançado</option>
                <option value="Terceiro">Introdução ao Backend</option>
                <option value="Quarto">Backend Avançado</option>
            </Select>

            <div>
                <button className={styles.btnRegister} type="submit">Cadastre-se</button>
            </div>
        </form>
    );
};
