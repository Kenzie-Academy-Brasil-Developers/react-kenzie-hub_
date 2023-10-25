import { useForm } from "react-hook-form";
import { InputRecord } from "../InputRecord/Record";

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const submit = (payLoad) => {
        console.log(payLoad);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Nome</label>
            <InputRecord
                label="Name"
                type="text"
                placeholder="Digite aqui seu nome"
                required
                {...register("name")} 
            />

            <label>Email</label>
            <InputRecord
                label="Email"
                type="email"
                placeholder="Digite aqui o seu email"
                required
                {...register("email")} 
            />

           
            <label>Senha</label>
            <InputRecord
                label="password"
                type="password"
                placeholder="Crie uma senha"
                required
                {...register("password")} 
            />

            <label>Confirmar senha</label>
            <InputRecord
                label="password"
                type="password"
                placeholder="Digite novamente sua senha"
                required
                {...register("password")} 
            />

            <label>Bio</label>
            <InputRecord
                label="biography"
                type="text"
                placeholder="Escreva sobre você"
                required
                {...register("biography")} 
            />
            
            <label>Contato</label>
            <InputRecord
                label="contact"
                type="text"
                placeholder="Opção de contato"
                required
                {...register("contact")} 
            />
            
            <div>
                <label htmlFor="tex">Selecionar Módulo</label>
            </div>
            <div>
                <select>
                    <option value="Primeiro">Primeiro Módulo</option>
                    <option value="Segundo">Segundo Módulo</option>
                    <option value="Terceiro">Terceiro Módulo</option>
                    <option value="Quarto">Quarto Módulo</option>
                    <option value="Quinto">Quinto Módulo</option>
                    <option value="Sexto">Sexto Módulo</option>
                </select>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    );
};
