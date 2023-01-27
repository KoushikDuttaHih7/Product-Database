const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
// _db, the underscore is only here to signal that
// this will only be used internally in this file

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Koushik-Shop:koushik.shop@cluster-shop.yyknzpb.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected to MongoDb");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
