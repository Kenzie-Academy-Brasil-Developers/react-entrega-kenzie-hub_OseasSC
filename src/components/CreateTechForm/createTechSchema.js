import {
    z
} from "zod";

export const createTechSchema = z.object({
    status: z.string().nonempty("O status é obrigatório para criação").email("Selecione um status válido."),
    title: z.string().nonempty("O titulo é obrigatório para criação").email("Selecione um titulo válido."),
})