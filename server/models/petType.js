const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const petTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const PetType = mongoose.model('PetType', petTypeSchema);

module.exports = PetType;