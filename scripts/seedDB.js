const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/christmaslist"
);

const giftSeed = [
    {
        gift: "",
        couple: "",
        synopsis:"",
        date: new Date(Date.now()),
        purchased:false
    }
]
db.Gift
    .remove({})
    .then(() => db.Gift.collection.insertMany(giftSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
