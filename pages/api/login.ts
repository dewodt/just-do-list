import type { NextApiRequest, NextApiResponse } from "next";
import findUser from "../../lib/findUser";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function logIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const userFound = await findUser(true, username, password);
  const secretJWT = process.env.SECRET_JWT as string;
  if (userFound) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        username: username,
      },
      secretJWT
    )
    
    const serialised = serialize(`${username}`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.json({msg: "Login success!", success: true});
  } else {
    res.json({msg: "Username or password is invalid!", success: false});
  }
}
