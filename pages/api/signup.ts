import type { NextApiRequest, NextApiResponse } from "next";
import findUser from "../../lib/findUser";
import writeSignUp from "../../lib/writeSignUp";

export default async function signUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, username, password } = req.body;
  const userFound = await findUser(false, username, password);
  if (!userFound) {
    // Username available
    await writeSignUp(name, username, password);
    res.json({msg: "Signup success", success: true});
  } else {
    // Username not taken
    res.json({msg: "Username is taken", success: false});
  }
}