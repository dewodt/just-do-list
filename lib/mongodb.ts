// Tes Connect ke Server
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI as string;
const client = new MongoClient(url);

export default async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

  } catch (err: any) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}
