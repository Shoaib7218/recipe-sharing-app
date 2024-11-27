const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
}, {
    collection: 'data' // Specify the collection name here
});

module.exports = mongoose.model('Recipie', RecipeSchema);
