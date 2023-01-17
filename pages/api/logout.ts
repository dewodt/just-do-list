import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.SECRET_JWT as string;

export default async function logOut(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get username from cookie
  const cookie = req.headers.cookie as string;
  const token = cookie.split("=")[1];
  const decoded = jwt.verify(token, secretJWT) as jwt.JwtPayload;
  const username = decoded.username

  res.setHeader('Set-Cookie', `${username}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  res.json({})
}
