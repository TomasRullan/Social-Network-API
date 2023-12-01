const router = require("express").Router();
const userRoutes = require("./userroutes.js");
const thoughtRoutes = require("./thoughtroutes.js");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
