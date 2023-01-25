const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://KoushikDutta:soBWGUmkHBXWDJvU@product.6itmcg5.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected to MongoDb");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
