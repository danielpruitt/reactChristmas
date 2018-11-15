const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    gift: { type: String, required: true },
    couple: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;