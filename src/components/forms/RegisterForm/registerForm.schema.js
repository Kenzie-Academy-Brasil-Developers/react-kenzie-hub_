import { z } from "zod";

const registerFormSchema = z.object({
    name: z
        .string()
        .min(1, "O nome é obrigatório."),
    email: z
        .string()
        .email("Forneça um e-mail válido")
        .min(1, "O email é obrigatório."),
    password: z
        .string()
        .min(6, "São necessários pelo menos 6 caracteres."),
    confirmPassword: z
        .string()
        .min(6, "Confirmar a senha é obrigatório."),
    bio: z
        .string()
        .min(1, "É o obrigatório o preenchento da bio."),
    contact: z
        .string()
        .min(1, "É necessário o preenchimento de contato."),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});

export { registerFormSchema }