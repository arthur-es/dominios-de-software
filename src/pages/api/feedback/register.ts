import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { registerFeedback } from "../../../backend/schemas/feedback";

import { PrismaInstance } from "../../../backend/database";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, score, content } = req.body;

  try {
    const prisma = PrismaInstance.getInstance();

    const foundFeedback = await prisma.feedback.findFirst({
      where: {
        id: id,
      },
    });

    if (!foundFeedback) {
      return res.status(404).json({ message: `Feedback não encontrado!` });
    }

    if (foundFeedback && foundFeedback.status === "RECEIVED") {
      return res.status(400).json({ message: `Feedback já registrado!` });
    }

    const updatedFeedback = await prisma.feedback.update({
      where: {
        id: id,
      },
      data: {
        score,
        content,
        status: "RECEIVED",
      },
    });

    return res.json({ message: `Feedback registrado!`, updatedFeedback });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
}

export default validate(registerFeedback, handler);
