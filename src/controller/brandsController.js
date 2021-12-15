const brandSchema = require('../models/brandSchema')
const mongoose = require('mongoose');

// GET ALL
const getAll = async (req, res) => {
    try {
        const brandFound = await brandSchema.find();
        res.status(200).send(brandFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// GET ONE
const getId = async (req, res) => {
    try {
        const brandFound = await brandSchema.findById(req.params.id);
        res.status(200).json(brandFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAll,
    getId
}