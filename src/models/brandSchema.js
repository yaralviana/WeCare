const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
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
    },

      
})

module.exports = mongoose.model('brands', brandSchema)