const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands'
    }, 
    review: {
        type: String,
        required: true
    },
    submitted: {
        type: Date,
        required: true,
        default: new Date
    }
})

const reviewCollection = mongoose.model('review', reviewSchema)

module.exports = reviewCollection