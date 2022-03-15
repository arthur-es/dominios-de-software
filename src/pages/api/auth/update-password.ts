import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { updatePasswordSchema } from "../../../backend/schemas/auth";

import { SupabaseInstance } from "../../../backend/database";

const supabase = SupabaseInstance.getInstance();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken, password } = req.body;

  const { error, data } = await supabase.auth.api.updateUser(accessToken, {
    password: password,
  });

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.json(data);
}

export default validate(updatePasswordSchema, handler);
