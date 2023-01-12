import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function deleteTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get req
  const { username, menu, taskId } = req.body;

  // Connect MongoDB
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);

  // Delete a task
  await coll.updateOne(
    { username: username },
    { $pull: { [menu]: {id: taskId}} }
  )

  // Tutup DB
  await client.close();

  // Res
  res.json({})
}
