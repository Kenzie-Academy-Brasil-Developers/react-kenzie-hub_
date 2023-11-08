import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { Select } from "../Select";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UsersContext";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });
    console.log(errors);

    const [loading, setLoading] = useState(false);
    const {userRegister} = useContext(UserContext);

    const submit = (formData) => {
        userRegister(formData, setLoading);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Name"
                type="text"
                placeholder="Digite aqui seu nome"
                error={errors.name}
                {...register("name")}
            />
            {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}

            <Input
                label="Email"
                type="text"
                placeholder="Digite aqui o seu email"
                path="confirmPassword"
                error={errors.email}
                {...register("email")}
            />
             {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

            <Input
                label="Senha"
                type="password"
                placeholder="Crie uma senha"
                error={errors.password}
                {...register("password")}
            />
             {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}

            <Input
                label="Confirmar senha"
                type="password"
                placeholder="Confirme sua senha"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
            />
                {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>}

            <Input
                label="Bio"
                type="text"
                placeholder="Escreva sobre você"
                error={errors.bio}
                {...register("bio")}
            />
             {errors.bio && <p className={styles.errorMessage}>{errors.bio.message}</p>}

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                error={errors.contact}
                {...register("contact")}
            />
            {errors.contact && <p className={styles.errorMessage}>{errors.contact.message}</p>}

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
