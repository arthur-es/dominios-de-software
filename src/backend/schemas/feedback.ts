import { object, string, number, TypeOf } from "yup";

export const newFeedback = object({
  companyId: number().required().positive().integer(),
  whatsapp: string().required().min(10).max(11),
  service: string().required().min(6),
  name: string().required().min(3),
});

export type NewFeedbackOnWhatsApp = TypeOf<typeof newFeedback>;
