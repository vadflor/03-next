import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect(
        "mongodb+srv://next:nextjs@cluster0.speep3b.mongodb.net/events?retryWrites=true&w=majority"
    );

    return client;
}
export async function insertDocument(client, collection, documents) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(documents);
    return result;
}

export async function getAllDocuments(client, collection, sort){
    const db = client.db();

    const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray();
    
    return documents;
}