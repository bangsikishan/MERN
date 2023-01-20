require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT, 
        () => console.log(`[+] Listening on port ${process.env.PORT}...`)
    );
})
.catch((error) => console.log(error));


app.use('/api/workouts', workoutRoutes);