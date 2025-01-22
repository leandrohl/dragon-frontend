import { z } from "zod";

export const LoginSchema = z.object({
  email: z
  .string({ message: "Campo obrigatório" })
  .email('Email inválido'),
  password: z
  .string({ message: "Campo obrigatório" })
  .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
})

export const DragonSchema = z.object({
  name: z
  .string({ message: "Campo obrigatório" }),
  type: z
  .string({ message: "Campo obrigatório" }),
  histories: z
  .array(z.object({ history: z.string()}))
})