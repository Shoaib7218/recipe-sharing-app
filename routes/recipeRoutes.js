const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/addRecipe', async (req, res) => {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ name, ingredients, instructions });
    try {
        await newRecipe.save();
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error });
    }
});

module.exports = router;
