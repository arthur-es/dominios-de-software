import axios from "axios";

import { sacflowEndpoint, sacflowToken } from "../../config";

export const sacflowAPI = axios.create({
  baseURL: sacflowEndpoint,
});

interface ISendWhatsApp {
  message: string;
  phone: string;
}

export async function sendWhatsAppText({
  message,
  phone,
}: ISendWhatsApp): Promise<void> {
  try {
    let parsedPhone = phone;

    if (phone.length !== 12 && phone.length !== 13) {
      parsedPhone = `55${phone}`;
    }

    return sacflowAPI.post(
      `/send-text`,
      {
        message,
        phone: parsedPhone,
      },
      {
        headers: {
          authorization: `Bearer ${sacflowToken}`,
        },
      }
    );
  } catch (err: any) {
    console.log("[ERRO]: Ao enviar WhatsApp", err);
    throw new Error(err.message);
  }
}
