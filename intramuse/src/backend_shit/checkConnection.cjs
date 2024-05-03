const { MongoClient } = require('mongodb');

// Update the MongoDB connection URI with the correct credentials
const uri = "mongodb+srv://intramuse:intramuse@postcluster.wlpvbp5.mongodb.net/?retryWrites=true&w=majority&appName=postCluster";

const client = new MongoClient(uri);

async function checkConnection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        // You're connected, you can proceed with your operations here
        // For example, you can ping the server or perform other database operations
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // If there's an error, handle it appropriately
    } finally {
        // No need to close the connection here since you might want to keep it open for other operations
    }
}

checkConnection();
