import {
    z
} from "zod";

export const createTechSchema = z.object({
    status: z.string().min(1, "O status é obrigatório para criação").max(50, "Selecione um status válido."),
    title: z.string().min(1, "O título é obrigatório para criação").max(50, "Selecione um título válido."),
});