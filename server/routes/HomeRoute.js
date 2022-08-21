const express = require('express')
const { home } = require('../controllers/HomeController')
const router = express.Router();

//routes
router.route("/").get(home)

module.exports = router
