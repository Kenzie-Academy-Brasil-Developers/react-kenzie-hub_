import { z } from "zod";

const registerFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z
    .string()
    .email("Forneça um e-mail válido")
    .min(1, "O email é obrigatório."),
    password: z.string()
    .min(8, "São necessários pelo menos 8 caracteres.")
    .regex(/[a-z+/]+/, "É necessário conter pelo menos uma letra minúscula")
    .regex(/[A-Z+/]+/, "É necessário conter pelo menos uma letra maiúscula")
    .regex(/[0-9+/]+/, "É necessário conter pelo menos um número"),
    ConfirmarSenha: "",
    Bio: "",
    Contato: "",
    SelecionarModulo: "",
}

)