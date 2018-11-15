import axios from "axios";

export default {
    // Gets all gifts
    getGifts: function () {
        return axios.get("/api/gifts");
    },
    // Gets the book with the given id
    getGift: function (id) {
        return axios.get("/api/gifts/" + id);
    },
    // Deletes the Gift with the given id
    deleteGift: function (id) {
        return axios.delete("/api/gifts/" + id);
    },
    // Saves a Gift to the database
    saveGift: function (giftData) {
        return axios.post("/api/gifts", giftData);
    }
};
