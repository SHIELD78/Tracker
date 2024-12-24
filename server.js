const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

// Self-signed certificates (or use ngrok URL for HTTPS)
const options = {
    key: fs.readFileSync('path/to/your/private-key.pem'),
    cert: fs.readFileSync('path/to/your/certificate.pem')
};

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

// Create an HTTPS server
https.createServer(options, app).listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});