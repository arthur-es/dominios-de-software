import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { companySchema } from "../../../backend/schemas/company";

import { PrismaInstance } from "../../../backend/database";

type Data = {
  message: string;
};

const prisma = PrismaInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, logoUrl, name, whatsapp } = req.body;

  try {
    const companyEmailAlreadyExists = await prisma.company.findFirst({
      where: { email },
    });

    if (companyEmailAlreadyExists) {
      console.log(companyEmailAlreadyExists);

      return res.status(400).json({
        message: `Company ${companyEmailAlreadyExists.name} has already taken the email ${email}! Try again with a different email.`,
      });
    }

    const createdCompany = await prisma.company.create({
      data: {
        email,
        logoUrl,
        name,
        whatsapp,
      },
    });

    return res
      .status(200)
      .json({ message: `Company ${createdCompany.name} was created!` });
  } catch (err: any) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
}

export default validate(companySchema, handler);
