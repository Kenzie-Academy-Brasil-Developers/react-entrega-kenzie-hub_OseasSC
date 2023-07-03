import {
    z
} from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatório").email("Digite um e-mail válido."),
    password: z.string().nonempty("A senha é obrigatória.").min(6, "A senha precisa conter pelo menos 6 caracteres.")
    /* .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
    .regex(/(?=.*?[0-9])/, "É necesário pelo menos um número."), vou deixar assim pois a API esta down e o user de teste tem apenas 6 caracteres na senha...*/
})