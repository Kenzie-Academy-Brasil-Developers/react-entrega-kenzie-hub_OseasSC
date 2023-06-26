import {
    z
} from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatório").email("Digite um e-mail válido."),
    password: z
        .string()
        .nonempty("A senha é obrigatória.")
        .min(8, "A senha precisa conter pelo menos 8 caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
        .regex(/(?=.*?[0-9])/, "É necesário pelo menos um número."),
})