import "../backend_shit/models/trackModel"

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://intramuse:<password>@postcluster.wlpvbp5.mongodb.net/?retryWrites=true&w=majority&appName=postCluster";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // find code goes here
    const db = client.db("<dbname>")
    // iterate code goes here
    const coll = db.collection("posts")
    const val = coll.find()
    // iterate code goes here
    await cursor.forEach(console.log);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
