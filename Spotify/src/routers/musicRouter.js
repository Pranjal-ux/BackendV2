const express = require('express')
const { createMusic } = require('../controllers/musicController')
const router = express.Router();
router.post("/upload", createMusic)

module.exports = router