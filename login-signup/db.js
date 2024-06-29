const mongoose = require("mongoose");
const ConnectToMongo = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/practise")
    .then(() => {
      console.log("connect to mongo");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = ConnectToMongo;
