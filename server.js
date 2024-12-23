const express = require('express');
const app = express();
const port = 3000; // Or any port you want to use

app.use(express.json()); // To parse JSON data

// Endpoint to receive the location
app.post('/receive-location', (req, res) => {
    const { latitude, longitude } = req.body;

    // Log the received location (you can store this in a database or process it)
    console.log(`Received Location: Latitude: ${latitude}, Longitude: ${longitude}`);

    // Send a response back
    res.json({ message: 'Location received successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});