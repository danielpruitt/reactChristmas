const router = require("express").Router();
const giftRoutes = require("./gifts");

// gift routes
router.use("/gifts", giftRoutes);

module.exports = router;
