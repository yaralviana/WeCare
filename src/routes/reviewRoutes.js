const express = require("express")
const router = express.Router()
const controller = require('../controller/reviewController')

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.post('/', controller.createReview)
router.put('/:id', controller.updateReview)
router.delete('/:id', controller.deleteReview)

module.exports = router