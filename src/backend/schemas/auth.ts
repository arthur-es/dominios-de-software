import { object, string, TypeOf } from "yup";

export const recoverPasswordSchema = object({
  email: string().optional().email(),
});

export const loginSchema = object({
  email: string().optional().email(),
  password: string(),
});

export const updatePasswordSchema = object({
  accessToken: string().required().min(6),
  password: string().required().min(6),
});

export type RecoverPasswordUser = TypeOf<typeof recoverPasswordSchema>;
export type LoginUser = TypeOf<typeof loginSchema>;
export type updatePasswordUser = TypeOf<typeof updatePasswordSchema>;
