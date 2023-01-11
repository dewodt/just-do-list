import type { NextApiRequest, NextApiResponse } from "next";

export default async function logOut(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', 'Login-JustDoList=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
  res.json({})
}
