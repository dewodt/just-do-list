import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;
const secretJWT = process.env.SECRET_JWT as string;

const client = new MongoClient(uri);

export default async function addStep(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get req
  const { menu, taskId, newStep } = req.body;

  // Get username from cookie
  const cookie = req.headers.cookie as string;
  const token = cookie.split("=")[1];
  const decoded = jwt.verify(token, secretJWT) as jwt.JwtPayload;
  const username = decoded.username

  // Connect MongoDB
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);

  // Add newStep data
  await coll.updateOne(
    { username: username, [`${menu}.id`]: taskId },
    { $push: { [`${menu}.$.subtask`]: newStep } }
  )
  
  // Tutup DB
  await client.close();

  // Res
  res.json({})
}
