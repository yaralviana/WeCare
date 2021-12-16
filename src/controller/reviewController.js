const reviewCollection = require('../models/reviewSchema')

//busca todas as reviews
const getAll = async(req, res) => {
    const { brands } = req

    const review = await reviewCollection.find({brands})
    return res.status(200).send(review)
}
//busca uma review por id
const get = async (req, res) => {
    try {
        const { brands } = req
        const _id = req.params.id

        const review = await reviewCollection.findOne({_id, brands})
        return res.status(200).send(review)

    } catch (error) {
        return res.status(404).send({ message: 'Não encontrado!' })
    }
}



module.exports = {
    getAll,
    get
}