const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Allow all origins
app.use(express.json()); // For parsing application/json

// Endpoint to receive the location
app.post('/receive-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received Location: Latitude: ${latitude}, Longitude: ${longitude}`);
    res.json({ message: 'Location received successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});