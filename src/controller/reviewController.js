const reviewCollection = require('../models/reviewSchema')

//busca todas as reviews
const getAll = async (req, res) => {
    const { brands } = req

    const review = await reviewCollection.find({ brands })
    return res.status(200).send(review)
}
//busca uma review por id
const get = async (req, res) => {
    try {
        const { brands } = req
        const _id = req.params.id

        const review = await reviewCollection.findOne({ _id, brands })
        return res.status(200).send(review)

    } catch (error) {
        return res.status(404).send({ message: 'Não encontrado!' })
    }
}
//adiciona nova review
const create = async (req, res) => {
    try {
        const { brands } = req

        const body = req.body
        body.brands = brands

        const review = await reviewCollection.create(body)
        return res.status(201).send(review)
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}


module.exports = {
    getAll,
    get,
    create
}