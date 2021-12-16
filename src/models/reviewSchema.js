const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    brands: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands'
    }, 
    comentario: {
        type: String,
        required: true
    },
})

const reviewCollection = mongoose.model('review', reviewSchema)

module.exports = reviewCollection