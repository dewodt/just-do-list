import type { NextApiRequest, NextApiResponse } from "next";

export default async function logOut(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.body;
  res.setHeader('Set-Cookie', `${username}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  res.json({})
}
