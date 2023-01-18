import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;
const secretJWT = process.env.SECRET_JWT as string;

const client = new MongoClient(uri);

export default async function deleteTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get req
  const { menu, projectId, taskId } = req.body;

  // Get username from cookie
  const cookie = req.headers.cookie as string;
  const token = cookie.split("=")[1];
  const decoded = jwt.verify(token, secretJWT) as jwt.JwtPayload;
  const username = decoded.username

  // Connect MongoDB
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);

  // Delete a task
  if (menu !== "projects") {
    // Not projects menu
    await coll.updateOne(
      { username: username },
      { $pull: { [menu]: {id: taskId}} }
    )
  } else {
    // projects menu
    await coll.updateOne(
      { username: username, "projects.id": projectId },
      { $pull: { "projects.$.tasks": {id: taskId} } }
    )
  }

  // Tutup DB
  await client.close();

  // Res
  res.json({})
}
