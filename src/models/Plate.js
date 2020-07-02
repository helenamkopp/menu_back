const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PlateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    spices: {
        type: String, 
        required: true,
    },
    allergenic: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PlateSchema.plugin(mongoosePaginate);

mongoose.model('Plate', PlateSchema);