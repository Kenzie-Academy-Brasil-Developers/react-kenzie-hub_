import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import api from "../../../services";
import { Select } from "../Select";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const [loading, setLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const navigate = useNavigate();

    const userRegister = async (payLoad) => {
        try {
            setLoading(true);
            await api.post("/users", payLoad);
            navigate("/");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            console.log(error);
            /* if (error.response?.data === "error") */ {
                toast.error("Algo deu errado! :c");
                console.log(alert)
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
            <label>Nome</label>
            <Input
                label="Name"
                type="text"
                placeholder="Digite aqui seu nome"
                errors={errors.name}
                {...register("name")}
            />

            <label>Email</label>
            <Input
                // label="Email"
                type="text"
                placeholder="Digite aqui o seu email"
                errors={errors.email}
                {...register("email")}
            />

            <div>
                <label>Senha</label>
                <Input
                    // label="password"
                    type="password"
                    placeholder="Crie uma senha"
                    errors={errors.password}
                    {...register("password")}
                />
                <button onClick={() => setIsHidden(!isHidden)}>{isHidden ? <MdVisibilityOff/> : <MdVisibility />}</button>
            </div>

            <label>Confirmar senha</label>
            <Input
                // label="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                errors={errors.confirmPassword}
                {...register("confirmPassword")}
            />

            <label>Bio</label>
            <Input
                // label="Bio"
                type="text"
                placeholder="Escreva sobre você"
                errors={errors.bio}
                {...register("bio")}
            />

            <label>Contato</label>
            <Input
                // label="contact"
                type="text"
                placeholder="Opção de contato"
                errors={errors.contact}
                {...register("contact")}
            />

            <label htmlFor="tex">Selecionar Módulo</label>
            <Select label="select">
                <option value="Primeiro">Introdução ao Frontend</option>
                <option value="Segundo">Frontend Avançado</option>
                <option value="Terceiro">Introdução ao Backend</option>
                <option value="Quarto">Backend Avançado</option>
            </Select>
           

            <div>
                <button className="btnOutline" type="submit" /* disabled={!isValid || !isDirty} */>Cadastre-se</button>
            </div>
            <div>
                <Link className="link" to="/">Voltar</Link>
            </div>
        </form>
    );
};
