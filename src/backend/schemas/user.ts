import { object, string, TypeOf } from "yup";

export const newUserSchema = object({
  name: string().required().min(2),
  email: string().optional().email(),
  password: string().required().min(6),
});

export type NewUser = TypeOf<typeof newUserSchema>;
