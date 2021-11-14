import MyDB from "utils/dbHandle";
import { getSession } from "next-auth/client";

async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) return res.status(401).send("Unauthorized");

  if (req.method === "POST") {
    const data = req.body; // data of incoming request

    const client = await MyDB.connect();

    const projectsCollection = MyDB.getProjectsCollection(client);

    const result = await projectsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Project inserted" });
  }
}

export default handler;
