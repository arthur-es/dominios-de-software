import { object, string, TypeOf } from "yup";

export const newFeedback = object({
  email: string().optional().email(),
  whatsapp: string().optional(), // TODO: VALIDAR NUMERO
  service: string().required().min(6),
  name: string().required().min(3),
});

export type NewFeedbackOnWhatsApp = TypeOf<typeof newFeedback>;
