const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/christmaslist"
);

const giftSeed = [
    {
        gift: "Nintendo Switch",
        couple: "Daniel and Rachel",
        synopsis:"Let's be real, it's for Daniel",
        date: new Date(Date.now())
    },
    {
        gift: "A nice trendy coat",
        couple: "Rachel and Daniel",
        synopsis:"Rachel needs a coat and not to be cold",
        date: new Date(Date.now())
    },
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
