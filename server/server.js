const express = require('express');
const cron = require('node-cron');
const { exec } = require('child_process');
const { Pool } = require('pg');

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

// Database connection setup
const pool = new Pool({
    user: 'your_username', // Replace with your database username
    host: 'localhost', // Replace with your database host
    database: 'your_database', // Replace with your database name
    password: 'your_password', // Replace with your database password
    port: 5432, // Default PostgreSQL port
});

// Sample API endpoint to fetch data
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM your_table'); // Replace 'your_table' with your table name
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Schedule a task to run every 15 minutes
cron.schedule('*/15 * * * *', () => {
    console.log('Running scheduled task: Fetching tweets');

    // Execute the Python script to fetch tweets
    exec('python3 webScrape/twitterLooker.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Script error output: ${stderr}`);
            return;
        }
        console.log(`Script output: ${stdout}`);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
