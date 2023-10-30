import { z } from "zod";

const loginformSchema = z.object({
    email: z.string().min(1, "O email é obrigatório."),
    password: z.string().min(1, "A senha é obrigatória."),
});

export { loginformSchema };