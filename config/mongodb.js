const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = () => {
    const mongoUri = process.env.MONGO_URI;

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin",
    });
    const database = mongoose.connection;

    database.on("error", (error) => {
        console.log(error);
    });

    database.once("connected", () => {
        console.log("Database Connected");
    });
}

module.exports = mongoDB;