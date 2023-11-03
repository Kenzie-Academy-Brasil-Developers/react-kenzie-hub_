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
        .min(8, "São necessários pelo menos 8 caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-].*/),
    confirmPassword: z
        .string()
        .min(8, "É necessário confirmar a senha"),
    bio: z
        .string()
        .min(1, "É o obrigatório o preenchento da bio."),
    contact: z
        .string()
        .min(1, "É necessário o preenchimento de contato."),
    course_module: z.string(), 
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});

export { registerFormSchema }