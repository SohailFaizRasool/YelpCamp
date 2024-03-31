const express = require("express")
const router = express.Router();

const secretController= require("../controllers/secret")

router.get("/",secretController.getAll)

router.get("/campgrounds",secretController.getCampground)




module.exports = router;