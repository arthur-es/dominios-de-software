import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { listFeedback } from "../../../backend/schemas/feedback";

import { PrismaInstance } from "../../../backend/database";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;

  console.log(`Buscando feedbacks da empresa ${companyId}`);

  try {
    const prisma = PrismaInstance.getInstance();

    const foundFeedbacks = await prisma.feedback.findMany({
      where: { companyId: Number(companyId) },
    });

    console.log(foundFeedbacks);

    return res.json(foundFeedbacks);
  } catch (err: any) {
    return res.status(500).json({
      message: `Ocorreu um erro interno ao processar esse pedido de feedback.`,
    });
  }
}

export default validate(listFeedback, handler);
