import { z } from "zod";

export const loginformSchema = z.object({
    email: z.string().email({ message: "Endereço de email inválido" }),
    password: z.string().min(6, {message: "A senha deve ter pelo menos 6 caracteres" }),
});

