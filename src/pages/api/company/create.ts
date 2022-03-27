import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { companySchema } from "../../../backend/schemas/company";

import { PrismaInstance } from "../../../backend/database";

type Data = {
  message: string;
};

const prisma = PrismaInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, logoUrl, name, whatsapp, slug } = req.body;

  try {
    const companySlugAlreadyTaken = await prisma.company.findFirst({
      where: { slug },
    });

    if (companySlugAlreadyTaken) {
      console.log(companySlugAlreadyTaken);

      return res.status(400).json({
        message: `Company ${companySlugAlreadyTaken.slug} has already taken the slug ${slug}! Try again with a different slug.`,
      });
    }

    const createdCompany = await prisma.company.create({
      data: {
        email,
        logoUrl,
        name,
        whatsapp,
        slug,
      },
    });

    return res.status(200).json({
      message: `Company ${createdCompany.name} was created with id ${createdCompany.id}!`,
    });
  } catch (err: any) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
}

export default validate(companySchema, handler);
