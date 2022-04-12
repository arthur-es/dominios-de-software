import { object, string, number, TypeOf } from "yup";

export const listReportsSchema = object({
  companyId: number().required().positive().integer(),
});

export type Reports = TypeOf<typeof listReportsSchema>;
