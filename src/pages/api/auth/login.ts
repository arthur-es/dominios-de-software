import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { loginSchema } from "../../../backend/schemas/auth";

import { SupabaseInstance } from "../../../backend/database";

type Data = {
  message: string;
};

const supabase = SupabaseInstance.getInstance();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  const { email, password } = req.body;

  if (!password) {
    let { user, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.json(user);
  }

  let { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.json(user);
}

export default validate(loginSchema, handler);
