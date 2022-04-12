import { object, string, number, TypeOf } from "yup";

export const newFeedback = object({
  companyId: number().required().positive().integer(),
  whatsapp: string().required().min(10).max(11),
  service: string().required().min(6),
  name: string().required().min(3),
});

export const listFeedback = object({
  companyId: number().required().positive().integer(),
});

export const registerFeedback = object({
  id: string().required(),
  content: string().optional(),
  score: number().required().positive().integer(),
});

export type NewFeedbackOnWhatsApp = TypeOf<typeof newFeedback>;
export type ListAllFeedbacks = TypeOf<typeof listFeedback>;
export type RegisterFeedback = TypeOf<typeof registerFeedback>;
