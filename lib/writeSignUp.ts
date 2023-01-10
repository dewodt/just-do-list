// Write a collection for new users
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function writeSignUp(name: string, username: string, password: string) {
  // Connect database
  await client.connect();

  // Create Collection
  const db = client.db(dbname);
  await db.createCollection(username);

  // Insert New User Data
  const coll = db.collection(username);
  const emptyUser = {
    name: name,
    username: username,
    password: password,
    today: [],
    important: [],
    planned: [],
    notes: [],
    projects: []
  }
  await coll.insertOne(emptyUser);

  // Close database
  await client.close();
}
