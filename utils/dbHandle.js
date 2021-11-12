import { MongoClient } from "mongodb";
import { config } from "config";

const MyDB = {
  connect: async function () {
    return await MongoClient.connect(config.mongoUri);
  },

  getProjectsCollection: function (client) {
    const db = client.db();
    return db.collection("projects");
  },
};

export default MyDB;
