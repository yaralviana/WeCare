const brandsSchema = require('../models/brandsSchema')
const mongoose = require('mongoose');

// adiciona filtro por categoria e país
const getAll = async (req, res) => {
    const { category, country } = req.query

    const filters = {}

    if (category) {
        filters.category = category
    }

    if (country) {
        filters.country = country
    }

    const brands = await brandsSchema.find(filters)
    return res.status(200).send(brands)
}
// Busca por id
const getId = async (req, res) => {
    try {
        const brandFound = await brandsSchema.findById(req.params.id);
        res.status(200).json(brandFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// Adicionando função like
const like = async (req, res) => {
    try {
        const { id } = req.params
        brands = await brandsSchema.findById(id)

        brands.likes += 1

        await brandsSchema.updateOne(brands)
        return res.status(200).send(brands)
    } catch (error) {
        return res.status(404).send({ message: 'Empresa/marca não encontrada!' })
    }
}

// Adicionando função unlike
const unlike = async (req, res) => {
    try {
        const { id } = req.params
        brands = await brandsSchema.findById(id);

        brands.likes -= 1

        await brandsSchema.updateOne(brands)
        return res.status(200).send(brands)
    } catch (error) {
        return res.status(404).send({ message: "Empresa/marca não encontrada!" })
    }
}
// CREATING ONE
const createBrand = async (req, res) => {
    try {
        const brands = new brandsSchema({
            name: req.body.name,
            category: req.body.category,
            country: req.body.country,
            likes: req.body.likes,
            _id: new mongoose.Types.ObjectId()
        })
        const brandSave = await brands.save()
        res.status(201).json({
            brands: brandSave
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}
//UPDATE ONE
const update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = { new: true }

        const brands = await brandsSchema.findByIdAndUpdate(id, body, update)
        return res.status(200).send(brands)
    } catch (error) {
        return res.status(404).send({ message: 'Marca/empresa não encontrada!' })
    }
}
//DELETE 
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params

        await brandsSchema.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Marca/empresa não encontrada!' })
    }
}


module.exports = {
    getAll,
    getId,
    like,
    unlike,
    createBrand,
    update,
    deleteBrand
}