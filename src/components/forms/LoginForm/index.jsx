import { useForm } from "react-hook-form";
import { InputLogin } from "../InputLogin/login.jsx";


export const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Email</label>
            <InputLogin
                label="Email"
                type="text"
                id="email"
                placeholder="Digite seu email aqui"
                required
                {...register("email")}
            />
            <label>Senha</label>
            <InputLogin
                label="Senha"
                type="password"
                id="email"
                placeholder="Digite aqui a sua senha"
                required
                {...register("password")}
            />

            <button type="submit">Entrar</button>

            <p>Ainda não possui uma conta?</p>
            <button type="submit">Cadastre-se</button>

        </form >
    );
};