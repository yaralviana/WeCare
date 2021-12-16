const brandsSchema = require('../models/brandsSchema')
const mongoose = require('mongoose');

// GET ALL
const getAll = async (req, res) => {
    try {
        const brandFound = await brandsSchema.find();
        res.status(200).send(brandFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// GET ONE
const getId = async (req, res) => {
    try {
        const brandFound = await brandsSchema.findById(req.params.id);
        res.status(200).json(brandFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// Adicionando função de like
const like = (req, res) => {

    const { id } = req.params;
    const found = models.find(brands => brands.id == id);
    if (found == undefined) {

        res.status(404).send({message: "Empresa/marca não encontrada."});
        
    }
    found.likes += 1;

    res.status(200).send(found);


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
    } catch(error) {
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
        const update = {new: true}

        const estabelecimento = await brandsSchema.findByIdAndUpdate(id, body, update)
        return res.status(200).send(estabelecimento)
    } catch (error) {
        return res.status(404).send({message: 'Marca/empresa não encontrada!'})
    }
}
//DELETE 
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params

        await brandsSchema.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Marca/empresa não encontrada!'})
    }
}


module.exports = {
    getAll,
    getId,
    like,
    createBrand,
    update,
    deleteBrand
}