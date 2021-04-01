const { Schema, model } = require('mongoose');

const petTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const PetType = model('PetType', petTypeSchema);

module.exports = PetType;