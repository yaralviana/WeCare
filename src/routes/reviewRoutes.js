const express = require("express")
const router = express.Router()
const controller = require('../controller/reviewController')

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.post('/create', controller.createReview)
router.put('/create', controller.updateReview)
router.delete('/delete', controller.deleteReview)

module.exports = router