const mongoose = require("mongoose");

const ConnectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost/starts", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect to mongo");
  } catch (error) {
    throw error;
  }
};

module.exports = ConnectToMongo;
