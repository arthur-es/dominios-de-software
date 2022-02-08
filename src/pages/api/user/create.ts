import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { newUserSchema } from "../../../backend/schemas/user";

import { SupabaseInstance } from "../../../backend/database";

const supabase = SupabaseInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  let { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.json(user);
}

export default validate(newUserSchema, handler);
