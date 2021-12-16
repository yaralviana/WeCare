const express = require("express")
const router = express.Router()
const controller = require('../controller/brandsController')
const reviewRoutes = require('./reviewRoutes')

router.get('/all', controller.getAll)
router.get('/:id', controller.getId)
router.patch("/:id/like", controller.like)
router.patch("/:id/unlike", controller.unlike)
router.post("/create", controller.createBrand)
router.put('/:id/update', controller.update)
router.delete('/:id/delete', controller.deleteBrand)

const linkReview = (req, res, next) => {
    const {id} = req.params
    req.brands = id
    next()
}

router.use('/:id/reviews', linkReview, reviewRoutes)


module.exports = router