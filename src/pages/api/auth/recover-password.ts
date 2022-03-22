import type { NextApiRequest, NextApiResponse } from "next";

import { validate } from "../../../backend/middleware/validade";
import { recoverPasswordSchema } from "../../../backend/schemas/auth";

import { SupabaseInstance } from "../../../backend/database";

/**
 * 
 * Forgotten Password Email
   Sends the user a log in link via email. 
   Once logged in you should direct the user to a new password form. 
   And use "Update User" below to save the new password.
 * 
 */

type Data = {
  message: string;
};

const supabase = SupabaseInstance.getInstance();

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  const { email } = req.body;

  const { data, error } = supabase.auth.api.resetPasswordForEmail(email);

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.json(data);
}

export default validate(recoverPasswordSchema, handler);
