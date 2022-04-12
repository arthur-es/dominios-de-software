import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { companySchema } from "../../../backend/schemas/company";

import { PrismaInstance } from "../../../backend/database";

const prisma = PrismaInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { email } = req.query;

  const parsedEmail = email.toString();

  try {
    const foundCompany = await prisma.company.findMany({
      where: { email: parsedEmail },
    });

    return res.status(200).json(foundCompany);
  } catch (err: any) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
}

export default validate(companySchema, handler);
