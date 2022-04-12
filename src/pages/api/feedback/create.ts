import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { newFeedback } from "../../../backend/schemas/feedback";

import { PrismaInstance } from "../../../backend/database";
import { sendWhatsAppText } from "@/backend/utils/sendWhatsAppMessage";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { whatsapp, name, service, companyId } = req.body;

  try {
    const prisma = PrismaInstance.getInstance();

    const foundCompany = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!foundCompany) {
      return res
        .status(400)
        .json({ message: `Empresa com o ${companyId} não existe!` });
    }

    let { id: feedbackId } = await prisma.feedback.create({
      data: {
        score: 0,
        name,
        whatsapp,
        status: "REQUESTED",
        companyId: foundCompany.id,
      },
    });

    const FEEDBACK_WHATSAPP_MESSAGE = `*${foundCompany.name}*: Olá ${name}, tudo bem?\n\nGostariamos do seu feedback sobre o serviço *${service}*!\n\n\nConta o que achou *clicando nesse link* 👇\nhttps://wptrack.vercel.app/feedback/${feedbackId}`;

    await sendWhatsAppText({
      message: FEEDBACK_WHATSAPP_MESSAGE,
      phone: whatsapp,
    });

    return res.json({
      message: `Pedido de feedback enviado para ${name}!`,
      feedbackId,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: `Ocorreu um erro interno ao processar esse pedido de feedback.`,
    });
  }
}

export default validate(newFeedback, handler);
