const { MongoClient } = require("mongodb");
const url = "mongodb+srv://aditya:Aditya@15@cluster0-8dg6u.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);
  const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         const collection = db.collection("people");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name":"aditya",
             "age":"19"
         }

         const p = collection.findOne({"name":"aditya"}).then((res)=>
         {
             console.log(res);
             
         }).catch((err)=>
         {
             console.log(err);
             
         });
         console.log(p);
         
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);