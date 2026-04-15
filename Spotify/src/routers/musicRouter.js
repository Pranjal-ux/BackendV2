const express = require('express')
const { createMusic } = require('../controllers/musicController')
const router = express.Router();
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
router.post("/upload", upload.single("file"), createMusic)

module.exports = router