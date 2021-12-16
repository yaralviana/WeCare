const express = require("express")
const router = express.Router()
const controller = require('../controller/brandsController')

router.get('/all', controller.getAll)
router.get('/:id', controller.getId)
router.patch("/:id/like", controller.like)
router.patch("/:id/unlike", controller.unlike)
router.post("/create", controller.createBrand)
router.put('/:id/update', controller.update)
router.delete('/:id/delete', controller.deleteBrand)

module.exports = router