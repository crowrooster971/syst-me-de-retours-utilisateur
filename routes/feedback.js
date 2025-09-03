const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

// Soumettre un retour
router.post('/', async (req, res) => {
    const feedback = new Feedback(req.body);
    try {
        await feedback.save();
        res.status(201).send(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtenir tous les retours
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.send(feedbacks);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
