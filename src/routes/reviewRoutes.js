const express = require("express")
const router = express.Router()
const controller = require('../controllers/reviewController')

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.get('/create', controller.create)

module.exports = router