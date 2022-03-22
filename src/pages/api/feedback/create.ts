import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { newFeedback } from "../../../backend/schemas/feedback";

import { PrismaInstance } from "../../../backend/database";
// import { SupabaseInstance } from "../../../backend/database";

// const supabase = SupabaseInstance.getInstance();

const prisma = PrismaInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { whatsapp, name, service, email } = req.body;

  if (!whatsapp && !email) {
    return res
      .status(400)
      .json({ message: "E-mail or WhatsApp must be suplied!" });
  }

  // let createdFeedback = undefined;

  // // Criar cliente
  // // Criar feedback

  // createdFeedback = await prisma.feedback.create({
  //   data: {
  //     score: 0,
  //     client: name,
  //     status: "REQUESTED",
  //     content: "content",
  //   },
  // });

  if (whatsapp) {
    console.log(
      `Enviando pedido de feedback do serviço ${service} para cliente ${name} via WhatsApp ${whatsapp}`
    );
  }

  if (email) {
    console.log(
      `Enviando pedido de feedback do serviço ${service} para cliente ${name} via E-mail ${email}`
    );
  }

  return res.json({ message: "Pedido de feedback enviado!" });
}

export default validate(newFeedback, handler);
