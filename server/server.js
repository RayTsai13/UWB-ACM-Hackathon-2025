const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle search queries
app.get('/api/search', (req, res) => {
    const query = req.query.q; // Extract the search query from the request
    console.log(`Received search query: ${query}`);

    // For now, just send a placeholder response
    res.json({ message: `Search query received: ${query}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
