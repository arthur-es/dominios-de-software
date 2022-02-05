import { object, string, TypeOf } from "yup";

export const companySchema = object({
  name: string().required().min(2),
  whatsapp: string().required().min(12).max(13),
  email: string().optional().email(),
  logoUrl: string().optional().url(),
});

export type Company = TypeOf<typeof companySchema>;
