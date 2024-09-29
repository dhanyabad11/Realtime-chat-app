const express = require('express');
const dotenv = require('dotenv'); // Fix the typo here
const { chats } = require("./data/data");
const cors = require('cors');

const app = express();
dotenv.config(); // Load environment variables

// Enable CORS
app.use(cors());

// Base route to check if API is running
app.get("/", (req, res) => {
    res.send("API is running");
});

// Route to fetch chats
app.get("/api/chat", (req, res) => {
    res.send(chats);
});

// Set the port from environment variables or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
