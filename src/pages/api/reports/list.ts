import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { listReportsSchema } from "../../../backend/schemas/reports";

import { PrismaInstance } from "../../../backend/database";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;

  try {
    const prisma = PrismaInstance.getInstance();

    const foundFeedbacks = await prisma.feedback.findMany({
      where: { companyId: Number(companyId) },
    });

    if (foundFeedbacks.length === 0) {
      return res
        .status(400)
        .json({ message: `No feedback was found for company ${companyId}` });
    }

    let scoreSum = 0;
    let feedbackAmount = 0;

    foundFeedbacks.forEach((feedback) => {
      if (feedback.score !== 0) {
        scoreSum += feedback.score;
        feedbackAmount += 1;
      }
    });

    const csat = scoreSum / feedbackAmount;

    return res.json({
      csat,
      total: feedbackAmount,
      feedbacks: foundFeedbacks,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: `Ocorreu um erro interno ao processar esse pedido de feedback.`,
    });
  }
}

export default validate(listReportsSchema, handler);
