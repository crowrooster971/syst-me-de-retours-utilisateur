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
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/user-feedback-system';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/feedback', feedbackRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});