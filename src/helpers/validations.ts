import { z } from "zod";

export const LoginSchema = z.object({
  email: z
  .string({ message: "Campo obrigatório" })
  .email('Email inválido'),
  password: z
  .string({ message: "Campo obrigatório" })
  .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
})