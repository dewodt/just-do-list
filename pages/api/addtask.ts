import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;
const secretJWT = process.env.SECRET_JWT as string;

const client = new MongoClient(uri);

export default async function addTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get menu and new Task
  const { menu, projectId, newTask } = req.body;

  // Get username from cookie
  const cookie = req.headers.cookie as string;
  const token = cookie.split("=")[1];
  const decoded = jwt.verify(token, secretJWT) as jwt.JwtPayload;
  const username = decoded.username

  // Connect MongoDB
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);

  // Add newTask data
  if (menu !== "projects") {
    // Not menu projects
    await coll.updateOne(
      { username: username },
      { $push: { [menu]: newTask} }
    )
  } else {
    // Menu projects
    await coll.updateOne(
      { username: username, "projects.id": projectId },
      { $push: { "projects.$.tasks": newTask} }
    )
  }
  
  // Tutup DB
  await client.close();

  // Res
  res.json({})
}
