const express = require('express');

const connectDB = require('./config/db')


const app = express();


//connect to db 
connectDB();

app.get('/', (req, res) =>
    res.json({ msg: 'Welcome to the Social API...' })
);

// Define Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
