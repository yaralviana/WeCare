const brandSchema = require('../models/brandsSchema')
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



module.exports = {
    getAll,
    getId,
    like
}