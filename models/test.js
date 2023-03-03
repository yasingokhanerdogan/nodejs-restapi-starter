const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        text: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("testTable", testSchema);
