// Query all username, name, and password for Login and Signup Page
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function readAccount() {
  await client.connect();
  const userNameList = [];
  const db = client.db(dbname);
  const cursor = await db.listCollections().toArray();
  for (const item of cursor) {
    const coll = db.collection(item.name);
    const data = await coll.find({}).project({username: 1, password: 1}).toArray();
    userNameList.push(data[0]);
  }
  await client.close();
}

