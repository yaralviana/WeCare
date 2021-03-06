const mongoose = require('mongoose')

const brandsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    country: {
        type: String,
        required: true   
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    submitted: {
        type: Date,
        required: true,
        default: new Date
    }
     
})

module.exports = mongoose.model('brands', brandsSchema)