require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT, 
    () => console.log(`[+] Listening on port ${process.env.PORT}...`)
);