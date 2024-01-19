const express=require("express");
const router= express.Router();

const {
    getAllRegistersTesting,
    getAllRegisters,
} = require("../controllers/registers");

router.route("/").get(getAllRegisters);
router.route("/testing").get(getAllRegistersTesting);

module.exports = router;