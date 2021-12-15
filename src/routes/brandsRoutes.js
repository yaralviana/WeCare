const express = require("express")
const router = express.Router()
const controller = require('../controller/brandsController')

router.get('/all', controller.getAll)
router.get('/:id', controller.getId)
router.patch("/:id/like", controller.like);

module.exports = router