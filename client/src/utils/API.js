import axios from "axios";

export default {
    // Gets all gifts
    getGifts: function () {
        return axios.get("/api/gifts");
    },
    // Gets the gift with the given id
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
    },
    getCouple: function(couple){
        return axios.get("/api/gifts/" + couple)
    },
    updateGift: function(data) { 
        return axios.put('/api/gifts/'+ data._id, data);
    }
};
