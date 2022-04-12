import { object, string, TypeOf } from "yup";

export const companySchema = object({
  name: string().required().min(2),
  whatsapp: string().required().min(12).max(13),
  email: string().optional().email(),
  logoUrl: string().optional().url(),
  slug: string()
    .required()
    .trim()
    .matches(new RegExp("^[a-z](-?[a-z])*$"), "Slug it not in correct format"),
});

export const listCompanySchema = object({
  slug: string()
    .required()
    .trim()
    .matches(new RegExp("^[a-z](-?[a-z])*$"), "Slug it not in correct format"),
});

export type Company = TypeOf<typeof companySchema>;
export type ListCompany = TypeOf<typeof listCompanySchema>;
