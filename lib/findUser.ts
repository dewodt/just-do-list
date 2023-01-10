// Query all username, name, and password for Login and Signup Page
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.MONGODB_URI as string;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri);

export default async function findUser(login: boolean, username: string, password:string) {
  const findObj = (login === true) ? {username: username, password: password} : {username: username};
  await client.connect();
  const db = client.db(dbname);
  const users = await db.listCollections().toArray();
  for (const user of users) {
    const coll = db.collection(user.name);
    const data = await coll.findOne(findObj);
    if (data !== null) {
      await client.close();
      return true;
    }
  }
  await client.close();
  return false;
}

