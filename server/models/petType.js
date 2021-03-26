const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const petTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const petType = mongoose.model('petType', petTypeSchema);

module.exports = petType;