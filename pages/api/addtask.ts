import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function addTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get req
  const { username, menu, newTask } = req.body;

  // Connect MongoDB
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);

  // Add newTask data
  await coll.updateOne(
    { username: username },
    { $push: { [menu]: newTask} }
  )
  
  // Tutup DB
  await client.close();

  // Res
  res.json({})
}