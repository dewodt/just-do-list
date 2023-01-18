// Receive a username, query data of the username
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function getUserData(username: string) {
  await client.connect();
  const db = client.db(dbname);
  const coll = db.collection(username);
  const [ data ] = await coll.find({}).toArray();
  const jsonData = JSON.parse(JSON.stringify(data));
  await client.close();
  return jsonData;
}
