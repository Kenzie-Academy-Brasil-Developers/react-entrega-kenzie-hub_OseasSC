import {
    z
} from "zod";

export const editTechSchema = z.object({
    status: z.string().min(1, "O status é obrigatório para criação").max(50, "Selecione um status válido."),
});