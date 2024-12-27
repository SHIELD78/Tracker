const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON body

// Endpoint to receive the location
app.post('/receive-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received Location: Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Respond with a success message
    res.json({ message: 'Location received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});