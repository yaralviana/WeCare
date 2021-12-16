const express = require("express")
const router = express.Router()
const controller = require('../controller/brandsController')

router.get('/all', controller.getAll)
router.get('/:id', controller.getId)
router.patch("/:id/like", controller.like)
router.post("/create", controller.createBrand)
router.put('/update', controller.update)
router.delete('/delete', controller.deleteBrand)

module.exports = router