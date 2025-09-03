const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const feedbackRouter = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/système-de-retours-utilisateur', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/feedback', feedbackRouter);

app.listen(PORT, () => {
    console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});